namespace WebTraining.Entities
{
    export class Category {
        CategoryID: KnockoutObservable<string>;
        CategoryName: KnockoutObservable<string>;
        Description: KnockoutObservable<string>;

        public constructor() {
            let that = this;
            that.CategoryID = ko.observable("");
            that.CategoryName = ko.observable("");
            that.Description = ko.observable("");
        }
    }
}