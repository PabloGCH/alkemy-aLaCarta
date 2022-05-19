//Dependencies
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import Swal from 'sweetalert2';

//Services
import { DishRequestService } from 'src/app/service/dish-request.service';
import { MenuDishesService } from 'src/app/service/menu-dishes.service';

//Components
import { DishBoxComponent } from '../dish-box/dish-box.component';


@Component({
  selector: 'app-dish-search',
  templateUrl: './dish-search.component.html',
  styleUrls: ['./dish-search.component.scss']
})
export class DishSearchComponent implements OnInit {
  searchbar = new FormControl;
  dishes :Array<any> = [];
  constructor(private dishRequest :DishRequestService, public menu :MenuDishesService) {
    //Si el valor de searchbar sufre cambios y tiene dentro un string mas largo que 2 caracteres
    //ejecuta getDishes()
    this.searchbar.valueChanges.pipe(debounceTime(1200)).subscribe(result => {
      if(this.searchbar.value?.length > 2) {
        this.getDishes();
      } else {
        this.dishes = [];
      }
    });
  }
  //Hace una peticion para conseguir platos y los guarda en la variable dishes
  getDishes() {
    this.dishRequest.searchDish(this.searchbar.value).subscribe(result => {
      this.dishes = result.results;
    });
  }
  //Recibe un objeto plato y ejecuta una alerta para preguntar al usuario si quiere
  //agregarlo al menu, si es confirmado se agrega el plato al menu
  addAlert(dish :JSON) {
    Swal.fire({
      icon:'question',
      title:'Do you wish to add this dish?',
      reverseButtons: true,
      buttonsStyling: false,
      customClass: {
        confirmButton: "btn btn-success mx-2",
        cancelButton: "btn btn-secondary mx-2"
      },
      showCancelButton: true,
      confirmButtonText: "Add"
    }).then(value => {
      if( value.isConfirmed) {
        this.menu.addDish(dish);
        this.addSuccessAlert();
      }
    })
  }
  //Ejecuta un alert para notificar al usuario que se agrego un plato con exito
  addSuccessAlert() {
    Swal.fire({
      icon:"success",
      title:"Dish added",
      buttonsStyling: false,
      customClass: {
        confirmButton: "btn btn-success mx-2",
      }
    });
  }
  //Ejecuta un alert para notificar al usuario que se llego al maximo de platos
  maxErrorAlert() {
    Swal.fire({
      icon:"error",
      title:"You can't add more than 4 dishes",
      buttonsStyling: false,
      customClass: {
        confirmButton: "btn btn-success mx-2",
      }
    });
  }
  //Ejecuta un alert para notificar al usuario que deben haber 2 platos no veganos y 2 veganos
  addErrorAlert() {
    Swal.fire({
      icon:"error",
      title:"There must be 2 vegan and non-vegan dishes",
      buttonsStyling: false,
      customClass: {
        confirmButton: "btn btn-success mx-2",
      }
    });
  }
  //Recibe un index y si cumple las siguientes condiciones:
  //  - Maximo de 4 platos
  //  - 2 platos veganos y 2 no veganos
  //Le pregunta al usuario si desea agregar el plato en dishes[index]
  //en caso de confirmar lo agrega al menu
  addDishButton(index :number) {
    if(this.menu.numOfDishes() == 4) {
      this.maxErrorAlert();
    } else {
      if(this.dishes[index]?.vegan) {
        if(this.menu.numOfVeganDishes() == 2) {
          this.addErrorAlert();
        } else {
          this.addAlert(this.dishes[index]);
        }
      } else {
        if(this.menu.numOfVeganDishes() == 0 && this.menu.numOfDishes() == 2) {
          this.addErrorAlert();
        } else if(this.menu.numOfVeganDishes() == 0 && this.menu.numOfDishes() == 2) {
          this.addErrorAlert();
        } else {
          this.addAlert(this.dishes[index]);
        }
      }
    }
  }

  ngOnInit(): void {

  }


}
