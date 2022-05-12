import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dish-box',
  templateUrl: './dish-box.component.html',
  styleUrls: ['./dish-box.component.scss']
})
export class DishBoxComponent implements OnInit {
  @Input() dish !:any;
  constructor() {

  }
  ngOnInit(): void {
  }
  seeDish() {
    console.log(this.dish);
  }

}
