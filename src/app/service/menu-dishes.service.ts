import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MenuDishesService {
  menu :Array<JSON> = [];
  constructor() { }
  addDish(dish :JSON) {
    this.menu.push(dish);
  }
  removeDish(index :number) {
    this.menu.splice(index, 1);
  }
  getMenu() :Array<JSON>{
    return this.menu;
  }
}
