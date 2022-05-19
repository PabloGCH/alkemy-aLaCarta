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
  getTotalPrice() :string{
    let totalPrice :number= 0;
    this.menu.forEach(element => {
      totalPrice += element?.pricePerServing;
    });
    return totalPrice.toFixed(2);
  }
  getTotalServingTime() :number{
    let totalServingTime :number= 0;
    this.menu.forEach(element => {
      totalServingTime += element?.readyInMinutes;
    });
    return totalServingTime;
  }
  getTotalHealthScore() :number{
    let totalHealthScore :number= 0;
    this.menu.forEach(element => {
      totalHealthScore += element?.healthScore;
    });
    return totalHealthScore;
  }
}
