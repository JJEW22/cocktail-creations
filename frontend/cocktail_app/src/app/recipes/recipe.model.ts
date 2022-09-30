import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
    public name: string;
    public ingredients: Ingredient[] = [];
    public description: string;
    public id: number;

    
    constructor(recipe: RecipeType) {
        console.log('got to stuff')
        this.name = recipe.name;
        recipe.ingredients.forEach(ingredientInfo => this.ingredients.push(new Ingredient(ingredientInfo)));
        this.description = recipe.description;
        this.id = recipe.id;
    }
}

type RecipeType = {
    name: string;
    ingredients: Ingredient[];
    description: string;
    id: number;

}