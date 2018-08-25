export class CarModel {
    constructor(public brand?: string, 
    public model?: string,
    public engine?: string,
    public horsePower?: number,
    public imageUrl?: string) {
        this.brand = '';
        this.model = '';
        this.engine = '';
        this.horsePower = 0;
        this.imageUrl = '';
    }
}