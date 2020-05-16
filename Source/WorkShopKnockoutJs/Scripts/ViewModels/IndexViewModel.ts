namespace WebTraining {
    import Product = Entities.Product;
    import Category = Entities.Category;
    import Supplier = Entities.Supplier;

    //import POST = Common.POST;
    //import GET = Common.GET;

    //import GetCategoriesUrl = Common.GetCategoryListUrl;

    export class ProductsViewModel  {
        public productList: KnockoutObservableArray<Product>;
        public categoryList: KnockoutObservableArray<Category>;
        public supplierList: KnockoutObservableArray<Supplier>;

        public selectedCategoryId: KnockoutObservable<string>;
        public selectedSupplierId: KnockoutObservable<string>;

        public product: KnockoutObservable<Product>;
        public products: KnockoutObservableArray<Product>;

        public Name: KnockoutObservable<string>;
        public isShow: KnockoutObservable<boolean>;
        public error: KnockoutObservable<string>;

        public counter = 0;

        constructor() {
            let that = this;
            that.error = ko.observable("");
            that.productList = ko.observableArray([]);
            that.categoryList = ko.observableArray([]);
            that.supplierList = ko.observableArray([]);

            that.product = ko.observable(new Product());
            that.selectedCategoryId = ko.observable("");
            that.selectedSupplierId = ko.observable("");

            that.products = ko.observableArray([]);

            this.LoadData();
           
            this.isShow = ko.observable(false);
        }

        public LoadData(): void {
            this.GetCategoryList(false);
            this.GetSupplierList(false);
            this.GetProductList(false);
        }

        public GetProductList(isUpdated:boolean)
        {
            let that = this;
            $.ajax({
                url: '/Home/GetProducts/',
                type: 'Get',
                contentType: 'application/json',
                async: false,
                success: function (data) {
                    ko.mapping.fromJS(data.productList, {}, that.productList);  
                    $('#productList').DataTable({
                        responsive: true
                    });
                },
                error: function () {
                }
            });
        }

        public GetCategoryList(isUpdated: boolean) {
            let that = this;
            $.ajax({
                url: '/Home/GetCategories/',
                type: 'Get',
                contentType: 'application/json',
                async: false,
                success: function (data) {
                    ko.mapping.fromJS(data.categoryList, {}, that.categoryList);
                }
            });
        }

        public GetSupplierList(isUpdated: boolean) {
            let that = this;
            $.ajax({
                url: '/Home/GetSuppliers/',
                type: 'Get',
                contentType: 'application/json',
                async: false,
                success: function (data)
                {
                    ko.mapping.fromJS(data.supplierList, {}, that.supplierList);
                }
            })
        }

        public GetSupplier(id: string | number): string {
            let that = this;
           
            for (let i = 0; i < that.supplierList.length; i++)
            {
                if (that.supplierList[i].SupplierID == id)
                {
                    return that.supplierList[i].CompanyName;
                }
            }
            return "";
        }

        public EditProduct(data: Product) {
            let that = this;
            console.log(data.ProductID);
            that.product = ko.observable(data);
        }

        public AddProduct(this)
        {
            let that = this;
            //that.product().SupplierID = that.selectedSupplierId();
            //that.product().CategoryID = that.selectedCategoryId();
            let body = ko.mapping.toJSON(this.product());
            $.ajax({
                url: '/Home/AddProducts/',
                data: body,
                type: 'Post',
                contentType: 'application/json',

                success: function (data) {
                    if (data.result) {
                        that.productList.push(data.product);
                        that.closeDialog('#addModal');
                    }
                    else {
                        that.error = data.errorMessage;
                        that.closeDialog('#addModal')
                        that.showDialog('#errorModal');
                    }
                },
                error: function () {
                }
            });
        }

        public saveData() {
        //alert(111);
        }

        closeDialog(id: string) : void {
            $(id).modal('toggle');
        }

        showDialog(id: string): void
        {
            $(id).modal('show');
        }
    }
}
