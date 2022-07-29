import { Injectable } from "@angular/core";
import { EventEmitter } from "@angular/core";

import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    public recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Tarator - Bulgarian Cold Cucumber Soup',
            'Tasty tarator',
            'https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_73,ar_16:9,w_768/v1/img/recipes/62/18/1/pic0pkinL.jpg',
            [
                new Ingredient('cucumber', 2),
                new Ingredient('plain Yoghurt', 1),
                new Ingredient('garlic cloves', 3),
                new Ingredient('fresh dill', 1),
            ]),
        new Recipe(
            'Spaghetti aglio e olio',
            'No two spaghetti aglio e olio recipes are alike, but this one is pretty true to the classic method.',
            'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2021%2F10%2F27%2F8962968_original-Tammy-2000.jpg',
            [
                new Ingredient('uncooked spaghetti', 1),
                new Ingredient('garlic', 6),
                new Ingredient('olive oil', 0.5),
                new Ingredient('red pepper flakes', 0.25),
                new Ingredient('salt and freshly ground black pepper', 0.25),
                new Ingredient('Parmigiano-Reggiano cheese', 1),
            ]),
    ];

    constructor(private shoppingListService: ShoppingListService) {

    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id: number) {
        return this.recipes.slice()[id];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}
