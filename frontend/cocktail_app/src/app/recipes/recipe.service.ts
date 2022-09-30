// code for product.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from './recipe.model';

type IngredientResponse = {
    name: string;
    amount: number;
    unit: string;
}

type RecipeResponce = {
    id: number;
    name: string;
    ingredients: IngredientResponse[];
    description: string;
}

@Injectable()
export class RecipeService {
    private recipeUrl = 'http://127.0.0.1:2222/recipes'

    constructor(
        private http: HttpClient) { }

    // get all of the recipes
    getRecipes(): Recipe[] {
        var value: Recipe[] = []
        this.http.get<RecipeResponce[]>(this.recipeUrl).subscribe(responceList => {
            responceList.forEach(responce => {
                var recipe = new Recipe(responce);
                value.push(recipe);
            });
        })
        console.log(value)
        return value
    }

    // get a single recipe
    getRecipe(id: number): Observable<Recipe>{
        return this.http.get<Recipe>(`${this.recipeUrl}/${id}`)
    }

    // // Create a put http request (put/update product data to server)
    // updateProduct(id:number, context: any) {
    //     return this.http.put(`$this.http_recipe_url/${id}`, JSON.stringify(context))
    //         .map((response: Response) => response.json());
    // }

    // // Create a delete http request (delete product to server)
    // deleteProduct(id: number) {
    //     return this.http.delete(`$this.http_recipe_url/${id}`)
    //         .map((response: Response) => response.json());
    // }
}