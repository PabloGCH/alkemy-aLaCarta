import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
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
  removeSuccess() {
    Swal.fire({
      icon:"success",
      title:"Dish removed"
    })
  }
  removeFromMenu(index :number) {
    Swal.fire({
      icon:"warning",
      title:"Do yo wish to remove this dish?",
      showCancelButton: true,
      confirmButtonText: "Remove"
    }).then(value => {
      if(value.isConfirmed){
        this.menu.removeDish(index);
        this.removeSuccess();
      }
    });
  }

  ngOnInit(): void {
    
  }
}
