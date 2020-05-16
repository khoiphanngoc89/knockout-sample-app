namespace WebTraining.Entities {
    export interface IProduct
    {
        ProductID: string;
        ProductName: string;
        SupplierID: string;
        CategoryID: string;
        QuantityPerUnit: string;
        UnitPrice: string;
        UnitsInStock: string;
        UnitsOnOrder: string;
        ReorderLevel: string;
        Discontinued: string;
    }

    export class Product {// extends ObservableObject<IProduct> {
        ProductID: KnockoutObservable<string>;
        ProductName: KnockoutObservable<string>;
        SupplierID: KnockoutObservable<string>;
        CategoryID: KnockoutObservable<string>;
        QuantityPerUnit: KnockoutObservable<string>;
        UnitPrice: KnockoutObservable<string>;;
        UnitsInStock: KnockoutObservable<string>;
        UnitsOnOrder: KnockoutObservable<string>;
        ReorderLevel: KnockoutObservable<string>;
        Discontinued: KnockoutObservable<boolean>;
        //Name: KnockoutObservable<string>;
        //UserRating: KnockoutObservable<string>;

        public constructor() {
            let that = this;
            that.ProductID = ko.observable("");
            that.ProductName = ko.observable("");
            that.SupplierID = ko.observable("");
            that.CategoryID = ko.observable("");
            that.QuantityPerUnit = ko.observable("");
            that.UnitPrice = ko.observable("");
            that.UnitsInStock = ko.observable("");
            that.UnitsOnOrder = ko.observable("");
            that.ReorderLevel = ko.observable("");
            that.Discontinued = ko.observable(false);
            //that.Name = ko.observable("");
            //that.UserRating = ko.observable("");

        }
        //public constructor(dataObject?: IProduct) {
        //    super();
        //    if (dataObject != null)
        //        this.DataObjectToObservable(dataObject);
            
        //}


        //DataObjectToObservable =
        //    /**
        //     * set observables with datas from ICustomer
        //     */
        //    (datas: IProduct): void => {
        //        let that = this;
        //        that.productID(datas.ProductID);
        //        that.productName(datas.ProductName);
        //        that.supplierID(datas.SupplierID);
        //        that.categoryID(datas.CategoryID);
        //        that.quantityPerUnit(datas.QuantityPerUnit);
        //        that.unitPrice(datas.UnitPrice);
        //        that.unitsInStock(datas.UnitsInStock);
        //        that.unitsOnOrder(datas.UnitsOnOrder);
        //        that.reorderLevel(datas.ReorderLevel);
        //        that.discontinued(datas.Discontinued);
        //    };

        //ObservableToDataObject =(): IProduct => {
        //        let that = this;
        //        return {
        //            ProductID:that.productID(),
        //            ProductName:that.productName(),
        //            SupplierID:that.supplierID(),
        //            CategoryID:that.categoryID(),
        //            QuantityPerUnit:that.quantityPerUnit(),
        //            UnitPrice:that.unitPrice(),
        //            UnitsInStock: that.unitsInStock(),
        //            ReorderLevel:that.reorderLevel(),
        //            UnitsOnOrder: that.unitsOnOrder(),
        //            Discontinued:that.discontinued()
        //        }
        //    };

    }
}