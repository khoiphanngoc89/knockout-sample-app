var WebTraining;
(function (WebTraining) {
    var Entities;
    (function (Entities) {
        var stringEmpty = WebTraining.Common.stringEmpty;
        var Product = (function () {
            function Product() {
                var that = this;
                that.ProductID = ko.observable(stringEmpty);
                that.ProductName = ko.observable(stringEmpty);
                that.SupplierID = ko.observable(stringEmpty);
                that.CategoryID = ko.observable(stringEmpty);
                that.QuantityPerUnit = ko.observable(stringEmpty);
                that.UnitPrice = ko.observable(stringEmpty);
                that.UnitsInStock = ko.observable(stringEmpty);
                that.UnitsOnOrder = ko.observable(stringEmpty);
                that.ReorderLevel = ko.observable(stringEmpty);
                that.Discontinued = ko.observable(stringEmpty);
                that.Name = ko.observable(stringEmpty);
                that.UserRating = ko.observable(stringEmpty);
            }
            ;
            return Product;
        }());
        Entities.Product = Product;
    })(Entities = WebTraining.Entities || (WebTraining.Entities = {}));
})(WebTraining || (WebTraining = {}));
//# sourceMappingURL=Product.js.map