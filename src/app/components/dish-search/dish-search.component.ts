//Dependencies
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

//Services
import { DishRequestService } from 'src/app/service/dish-request.service';

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
  constructor(private dishRequest :DishRequestService) {
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

  ngOnInit(): void {

  }


}
