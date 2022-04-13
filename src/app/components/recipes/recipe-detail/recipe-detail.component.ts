import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { Recipe } from "./../../../models/recipe";
import { RecipeService } from "./../../../services/recipe.service";
import { Option } from "../../dropdown/dropdown.component";

enum Actions {
  AddToShoppingList = 1,
  EditRecipe = 2,
  DeleteRecipe = 3,
}

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.scss"],
})
export class RecipeDetailComponent implements OnInit {
  id: string | number;
  recipe: Recipe;
  options: Option[] = [
    {
      name: "Add to shopping list",
      value: Actions.AddToShoppingList,
    },
    {
      name: "Edit recipe",
      value: Actions.EditRecipe,
    },
    {
      name: "Delete recipe",
      value: Actions.DeleteRecipe,
    },
  ];
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(({ id }) => {
      this.id = id;
      this.recipe = this.recipeService.getRecipeByID(id);
    });
  }

  get ingredients() {
    return this.recipe.ingrdients;
  }

  onSelect(value) {
    if (value === Actions.DeleteRecipe) {
      this.recipeService.deleteRecipe(this.id);
      this.router.navigateByUrl("/recipes/new");
    }
  }
}
