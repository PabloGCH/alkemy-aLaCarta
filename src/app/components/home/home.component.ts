import { Component, OnInit } from '@angular/core';


import { DishBoxComponent } from '../dish-box/dish-box.component';

import { DishRequestService } from 'src/app/service/dish-request.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  constructor(private dishRequest :DishRequestService) {

  }


  ngOnInit(): void {
    
  }
}
