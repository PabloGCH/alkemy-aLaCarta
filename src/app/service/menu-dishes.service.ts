import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MenuDishesService {
  private veganDishes :number = 0;
  private menu :Array<any> = [];
  constructor() { }
  addDish(dish :any) {
    if(dish?.vegan == true) {
      this.veganDishes++;
    }
    this.menu.push(dish);
  }
  removeDish(index :number) {
    if(this.menu[index]?.vegan == true) {
      this.veganDishes--;
    }
    this.menu.splice(index, 1);
  }
  getMenu() :Array<JSON>{
    return this.menu;
  }
  numOfDishes() {
    return this.menu.length;
  }
  numOfVeganDishes() {
    return this.veganDishes;
  }
}
