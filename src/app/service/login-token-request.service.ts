import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginTokenRequestService {
  constructor() {

  }
  //Recibe dos strings, el email y la contraseña
  //Retorna  el observador de la peticion
  getToken(email:string, password:string) :Observable<any>{
    let response = new ReplaySubject<string>(1);
    if(email == "testguy@mail.com" && password == "password") {
	response.next("token");
    } else {
	response.error("Invalid user");
    }
    return response;
  }

}
