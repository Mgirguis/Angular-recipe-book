import {Injectable} from '@angular/core';
import {Http, Response } from '@angular/http';
// import ' rxjs/Rx ';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';

@Injectable()

export class DataStorageService {
  constructor(private http: Http, private recipeService: RecipeService) {}
    storeRecipes() {
     return this.http.put('https://ng-recipe-book-4ae35.firebaseio.com/recipe.json',
        this.recipeService.getRecipes());
    }

    getRecipes() {
    this.http.get('https://ng-recipe-book-4ae35.firebaseio.com/recipe.json')
      .pipe(map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      ))
      .subscribe(
        (recipes: Recipe[] ) => {
          this.recipeService.setRecipes(recipes);
        }
      );

    }
}
