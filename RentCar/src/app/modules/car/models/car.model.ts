export class CarModel {
    constructor(public brand?: string,
        public model?: string,
        public engine?: string,
        public horsePower?: number,
        public imageUrl?: string,
        public createdBy?: string) {
        this.brand = '';
        this.model = '';
        this.engine = '';
        this.horsePower = null;
        this.imageUrl = '';
        this.createdBy = '';
    }
}