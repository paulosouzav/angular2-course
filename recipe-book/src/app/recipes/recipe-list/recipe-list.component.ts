import { Component, OnInit, EventEmitter, Output} from '@angular/core';

import { Recipe } from '../recipe';  

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

	recipes: Recipe[] = [];
	@Output() recipeSelected = new EventEmitter();
	recipe = new Recipe('Dummy', 'Dummy', 'http://manhattanpizzaplacehga.com/wp-content/uploads/2016/03/wafswectpmbr0zmug9ly.jpg')

	constructor() { }

	ngOnInit() {
	}

	onSelected(recipe: Recipe){
		this.recipeSelected.emit(recipe);
	}

}
