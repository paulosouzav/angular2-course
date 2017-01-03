import { Component, OnInit, EventEmitter, Output} from '@angular/core';

import { Recipe } from '../recipe';  

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

	recipes: Recipe[] = [
		new Recipe('Pizza de Pepperoni', 'Massa de Pizza', 'http://manhattanpizzaplacehga.com/wp-content/uploads/2016/03/wafswectpmbr0zmug9ly.jpg',[]),
		new Recipe('Pasta', 'Deliciosa', 'http://s3.amazonaws.com/etntmedia/media/images/ext/945700245/hot-sauce-Arrabiata-pasta.jpg',[])
	];
	@Output() recipeSelected = new EventEmitter<Recipe>();

	constructor() { }

	ngOnInit() {
	}

	onSelected(recipe: Recipe){
		this.recipeSelected.emit(recipe);
	}

}
