export class Ingredient {
    public name: string;
    public amount: number;
    public unit: string;

    constructor(ingredientInfo: IngredientInfo) {
        this.name = ingredientInfo.name;
        this.amount = ingredientInfo.amount;
        this.unit = ingredientInfo.unit
    }
}

type IngredientInfo = {
    name: string;
    amount: number;
    unit: string;
}