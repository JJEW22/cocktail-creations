import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe('test recipe 1', 'TR1 description'),
    new Recipe('test recipe 2', 'TR2 description'),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
