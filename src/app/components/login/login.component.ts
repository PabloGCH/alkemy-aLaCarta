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
  submitting :boolean = false; //Para activar/desactivar boton de login
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
  //Recibe el nombre de un input y retorna true si tiene un error email
  emailError(input :string) :boolean{
    return this.loginForm.get(input)?.errors?.['email'];
  }
  //Recibe el nombre de un input y retorna true si tiene un error required
  requiredError(input :string) :boolean{
    return this.loginForm.get(input)?.errors?.['required'];
  }
  //Recibe el nombre de un input y retorna true si el valor ingresado no es valido
  invalid(input :string) {
    return this.loginForm.get(input)?.invalid;
  }
  //Recibe el nombre de un input y retorna true si el input fue manipulado
  touched(input :string) {
    return this.loginForm.get(input)?.touched;
  }
  //Pide un token para poder logearse y lo guarda en el localstorage
  //Si falla se lo hace saber al usario con un alert, de otra forma, redirecciona al home
  loginSubmit() {
    let reference = this;
    reference.submitting = true;
    let _router = this._router;
    this.loginService.getToken(this.loginForm.get(['email'])?.value, this.loginForm.get(['password'])?.value).subscribe({
      next(response) {
        sessionStorage.setItem("token", response.token);
        _router.navigate(['home']);
        reference.submitting = false;
      },
      error() {
        Swal.fire({
          title: "Error during login",
          icon: "error",
          buttonsStyling: false,
          customClass: {
            confirmButton: "btn btn-success mx-2",
          }
        });
        reference.submitting = false;
      }
    });
  }
}
