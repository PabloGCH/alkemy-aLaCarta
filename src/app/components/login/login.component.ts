import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';


import { LoginTokenRequestService } from 'src/app/service/login-token-request.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', Validators.required)
  });

  constructor(
    private loginService :LoginTokenRequestService,
    private _router :Router
    ) { }

  ngOnInit(): void {

  }
  emailError(input :string) {
    return this.loginForm.get(input)?.errors?.['email'];
  }
  requiredError(input :string) {
    return this.loginForm.get(input)?.errors?.['required'];
  }
  invalid(input :string) {
    return this.loginForm.get(input)?.invalid;
  }
  touched(input :string) {
    return this.loginForm.get(input)?.touched;
  }

  loginSubmit() {
    let _router = this._router;
    this.loginService.getToken(this.loginForm.get(['email'])?.value, this.loginForm.get(['password'])?.value).subscribe({
      next(response) {
        sessionStorage.setItem("token", response.token);
        _router.navigate(['home']);
      },
      error(err) {
        Swal.fire({
          title: "Error during login",
          icon: "error"
        });
      },
    });
  }
}
