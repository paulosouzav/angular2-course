import { Injectable } from '@angular/core';
import { Recipe } from './recipe';

import { Ingredient } from '../shared/ingredient';

@Injectable()
export class RecipeService {
	private recipes: Recipe[] = [
		new Recipe('Pizza de Pepperoni', 'Massa de Pizza', 'http://manhattanpizzaplacehga.com/wp-content/uploads/2016/03/wafswectpmbr0zmug9ly.jpg',[
			new Ingredient('Cheese',2),
			new Ingredient('Pepperoni',20)
			]),
		new Recipe('Pasta', 'Deliciosa', 'http://s3.amazonaws.com/etntmedia/media/images/ext/945700245/hot-sauce-Arrabiata-pasta.jpg',[
			new Ingredient('Pasta',2),
			new Ingredient('Cheese',20)
			])
	];

  	constructor() { }

  	getRecipes(){
  		return this.recipes;
  	}

}
