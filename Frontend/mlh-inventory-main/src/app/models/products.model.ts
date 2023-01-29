export class Products {
    constructor (
        public id: number,
	    public itemName: string,
	    public itemDesc: string,
	    public pricePerUnit: number,
        public unitsAvailable: number
    ) {}
}