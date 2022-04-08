import { Ingredient } from "./ingredient";
export interface Recipe {
  id?: number | string;
  name: string;
  imageURL: string;
  description: string;
  ingrdients: Ingredient[];
}
