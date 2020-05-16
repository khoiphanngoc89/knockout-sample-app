namespace WebTraining.Entities
{
    export class Supplier {
        SuppierID: KnockoutObservable<string>;
        CompanyName: KnockoutObservable<string>;
        ContractName: KnockoutObservable<string>;
        ContactTitle: KnockoutObservable<string>;
        Address: KnockoutObservable<string>;
        City: KnockoutObservable<string>;
        Region: KnockoutObservable<string>;
        PostalCode: KnockoutObservable<string>;
        Country: KnockoutObservable<string>;
        Phone: KnockoutObservable<string>;
        Fax: KnockoutObservable<string>;
        HomePage: KnockoutObservable<string>;

        public constructor() {
            let that = this;
            that.SuppierID = ko.observable("");
            that.CompanyName = ko.observable("");
            that.ContractName = ko.observable("");
            that.ContactTitle = ko.observable("");
            that.Address = ko.observable("");
            that.City = ko.observable("");
            that.Region = ko.observable("");
            that.PostalCode = ko.observable("");
            that.Country = ko.observable("");
            that.Fax = ko.observable("");
            that.HomePage = ko.observable("");
        }
    }
}