import { Injectable } from '@angular/core';
import { Recipe } from './recipe';

@Injectable()
export class RecipeService {
	private recipes: Recipe[] = [
		new Recipe('Pizza de Pepperoni', 'Massa de Pizza', 'http://manhattanpizzaplacehga.com/wp-content/uploads/2016/03/wafswectpmbr0zmug9ly.jpg',[]),
		new Recipe('Pasta', 'Deliciosa', 'http://s3.amazonaws.com/etntmedia/media/images/ext/945700245/hot-sauce-Arrabiata-pasta.jpg',[])
	];

  	constructor() { }

  	getRecipes(){
  		return this.recipes;
  	}

}
