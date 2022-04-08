import { RecipeDetailComponent } from "./components/recipes/recipe-detail/recipe-detail.component";
import { AddOrEditRecipeComponent } from "./components/recipes/add-or-edit-recipe/add-or-edit-recipe.component";
import { ShoppingListComponent } from "./components/shopping-list/shopping-list.component";
import { RecipesComponent } from "./components/recipes/recipes.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/recipes",
    pathMatch: "full",
  },
  {
    path: "recipes",
    component: RecipesComponent,
    children: [
      {
        path: "",
        redirectTo: "new",
        pathMatch: "full",
      },
      {
        path: "new",
        component: AddOrEditRecipeComponent,
      },
      {
        path: "detail/:id",
        component: RecipeDetailComponent,
      },
      {
        path: "edit/:id",
        component: AddOrEditRecipeComponent,
      },
    ],
  },
  {
    path: "shopping-list",
    component: ShoppingListComponent,
  },
  {
    path: "**",
    redirectTo: "/recipes",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
