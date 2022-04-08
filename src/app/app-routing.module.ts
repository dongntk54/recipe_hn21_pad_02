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
