import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


import { LoginTokenRequestService } from 'src/app/service/login-token-request.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email:string = '';
  password:string = '';

  constructor(
    private loginService :LoginTokenRequestService,
    private _router :Router
    ) { }

  ngOnInit(): void {

  }

  loginSubmit() {
    let _router = this._router;
    this.loginService.getToken(this.email, this.password).subscribe({
      next(response) {
        localStorage.setItem("token", response.token);
        _router.navigate(["home"]);
      },
      error(err) {console.log(err)},
    });
  }
}
