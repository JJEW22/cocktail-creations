import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component'


const routes: Routes = [
  { path: 'recipes', component: RecipesComponent },
  // TODO: go from here big guy 
  { path: 'recipes/:id', component: RecipesComponent },

  // otherwise redirect to recipes
  { path: '**', redirectTo: '/recipes' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
