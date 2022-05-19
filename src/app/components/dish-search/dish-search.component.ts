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
    // Debounce para busqueda
    this.searchbar.valueChanges.pipe(debounceTime(1200)).subscribe(result => {
      if(this.searchbar.value?.length > 2) {
        this.getDishes();
      } else {
        this.dishes = [];
      }
    });
  }
  getDishes() {
    this.dishRequest.searchDish(this.searchbar.value).subscribe(result => {
      this.dishes = result.results;
    });
  }

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
