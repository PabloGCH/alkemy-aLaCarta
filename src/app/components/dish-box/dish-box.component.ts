import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dish-box',
  templateUrl: './dish-box.component.html',
  styleUrls: ['./dish-box.component.scss']
})
export class DishBoxComponent implements OnInit {
  @Input() dish !:any;
  @Input() index !:number;
  
  constructor() {
    
  }

  ngOnInit(): void {
  }
  
  expandLinkText(element :HTMLElement){
    console.log(typeof(element.getAttribute('aria-expanded')));
    if(element.getAttribute('aria-expanded') == 'true') {
      element.innerHTML = "See less";
    } else {
      element.innerHTML = "See more";
    }
  }

  seeDish() {
    console.log(this.dish);
  }

}
