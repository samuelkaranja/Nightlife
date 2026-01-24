import { type DbDrink } from "../types/dbDrink";
import { type Drink } from "../types/uiDrink";

export const mapDbDrinkToUiDrink = (drink: DbDrink): Drink => ({
  id: drink.id,
  title: drink.name,
  image: drink.image_url,
  price: drink.price,
  status: drink.status,
});
