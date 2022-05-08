import { Component, OnInit } from '@angular/core';
import { LoginTokenRequestService } from 'src/app/service/login-token-request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private loginService :LoginTokenRequestService) {

  }

  ngOnInit(): void {
    console.log("you got here");
  }

}
