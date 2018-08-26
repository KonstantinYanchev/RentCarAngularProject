export class CarModel {
    constructor(
        public id?: string,
        public brand?: string,
        public model?: string,
        public engine?: string,
        public horsePower?: number,
        public imageUrl?: string,
        public createdBy?: string,
        public yearOfManufacture?: number,
        public pricePerDay?: number,
        public isApproved: boolean = false) {
        this.brand = brand;
        this.model = model;
        this.engine = engine;
        this.horsePower = horsePower;
        this.imageUrl = imageUrl;
        this.createdBy = createdBy;
        this.yearOfManufacture = yearOfManufacture;
        this.pricePerDay = pricePerDay;
        this.isApproved = isApproved;
    }
}