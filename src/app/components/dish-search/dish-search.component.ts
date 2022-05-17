//Dependencies
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

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
  dishes :Array<JSON> = [];
  @Input() selectedDishes :Array<JSON> = [];
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
      console.log(this.dishes[0]);
    });
  }
  addDishButton(index :number) {
    this.menu.addDish(this.dishes[index]);
  }

  ngOnInit(): void {

  }


}
