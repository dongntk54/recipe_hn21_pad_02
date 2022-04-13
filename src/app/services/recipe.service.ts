import { Injectable } from "@angular/core";
import { Recipe } from "./../models/recipe";

@Injectable({
  providedIn: "root",
})
export class RecipeService {
  private recipes: Recipe[] = [
    {
      id: 0,
      name: "Burger",
      imageURL:
        "https://media.istockphoto.com/photos/juicy-hamburger-on-white-background-picture-id1206323282?k=20&m=1206323282&s=612x612&w=0&h=yatlq6BHRCCvoTzFZLSwaJc0O8Quct_tRPWtH0dj9Fc=",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet purus ac sem scelerisque porta. Etiam suscipit vitae neque sed pharetra.",
      ingrdients: [
        {
          name: "beef",
          quantity: "1 pound",
        },
        {
          name: "egg",
          quantity: "1 large",
        },
        {
          name: "minced onion",
          quantity: "1/2 cup",
        },
      ],
    },
    {
      id: 1,
      name: "Sausage",
      imageURL:
        "https://www.collinsdictionary.com/images/full/sausage_410446060.jpg",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed ac felis eleifend, ultricies nunc tempor, malesuada est.",
      ingrdients: [
        {
          name: "pork",
          quantity: "1 pound",
        },
        {
          name: "flour",
          quantity: "100 gram",
        },
      ],
    },
  ];
  constructor() {}

  getAllRecipes() {
    return this.recipes;
  }

  getRecipeByID(id) {
    let index = this.recipes.findIndex((r) => r.id == id);

    if (index !== -1) {
      return this.recipes[index];
    }

    return null;
  }

  addNewRecipe(recipe) {
    this.recipes.push(recipe);
  }

  deleteRecipe(id) {
    let index = this.recipes.findIndex((r) => r.id == id);

    if (index !== -1) {
      this.recipes.splice(index, 1);
    }
  }
}
