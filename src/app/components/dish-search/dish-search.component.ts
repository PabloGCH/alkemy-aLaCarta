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
    /*
    // Debounce para busqueda
    this.searchbar.valueChanges.pipe(debounceTime(1200)).subscribe(result => {
      console.log(result);
    })
    */
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
      title:"dish added"
    });
  }
  maxErrorAlert() {
    Swal.fire({
      icon:"error",
      title:"You can't add more than 4 dishes"
    });
  }
  addErrorAlert() {
    Swal.fire({
      icon:"error",
      title:"there must be 2 vegan and non-vegan dishes"
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
