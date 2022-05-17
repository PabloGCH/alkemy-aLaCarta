import { Component, OnInit } from '@angular/core';
import { DishBoxComponent } from '../dish-box/dish-box.component';
import { DishRequestService } from 'src/app/service/dish-request.service';
import { MenuDishesService } from 'src/app/service/menu-dishes.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  constructor(private dishRequest :DishRequestService, public menu :MenuDishesService) {

  }
  getMenuDishes() :Array<JSON>{
    return this.menu.getMenu();
  }
  removeFromMenu(index :number) {
    this.menu.removeDish(index);
  }

  ngOnInit(): void {
    
  }
}
