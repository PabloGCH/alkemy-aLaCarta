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
  totalHealthScore :number = 0;
  totalPrice :string = '';
  totalServingTime :number = 0;
  constructor(private dishRequest :DishRequestService, public menu :MenuDishesService) {

  }
  //Retorna el menu
  getMenuDishes() :Array<JSON>{
    return this.menu.getMenu();
  }
  //Muestra alert que notifica que se elimino un plato exitosamente
  removeSuccess() {
    Swal.fire({
      icon:"success",
      title:"Dish removed",
      buttonsStyling: false,
      customClass: {
        confirmButton: "btn btn-success mx-2",
      }
    })
  }
  //Recibe un indice y elimina el plato con ese indice del menu
  removeFromMenu(index :number) {
    Swal.fire({
      icon:"warning",
      title:"Do yo wish to remove this dish?",
      reverseButtons: true,
      buttonsStyling: false,
      customClass: {
        confirmButton: "btn btn-danger mx-2",
        cancelButton: "btn btn-secondary mx-2"
      },
      showCancelButton: true,
      confirmButtonText: "Remove"
    }).then(value => {
      if(value.isConfirmed){
        this.menu.removeDish(index);
        this.removeSuccess();
        this.updateMenu();
      }
    });
  }
  //Actualiza los valores totales del menu
  updateMenu() {
    this.totalHealthScore = this.menu.getTotalHealthScore();
    this.totalPrice = this.menu.getTotalPrice();
    this.totalServingTime = this.menu.getTotalServingTime();
  }

  ngOnInit(): void {
    this.updateMenu();
  }
}
