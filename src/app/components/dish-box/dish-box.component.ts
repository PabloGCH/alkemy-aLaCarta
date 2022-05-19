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
  
  //Recibe un elemento html, si su atributo aria-expanded tiene un valor
  // de true modifica su inner html a see less, de lo contrario lo cambia a see more
  expandLinkText(element :HTMLElement){
    console.log(typeof(element.getAttribute('aria-expanded')));
    if(element.getAttribute('aria-expanded') == 'true') {
      element.innerHTML = "See less";
    } else {
      element.innerHTML = "See more";
    }
  }
}
