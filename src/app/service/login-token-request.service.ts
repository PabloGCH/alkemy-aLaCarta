import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginTokenRequestService {
  tokenURL :string = "http://challenge-react.alkemy.org/";
  constructor(private http :HttpClient) {

  }
  //Recibe dos strings, el email y la contraseña
  //Retorna  el observador de la peticion
  getToken(email:string, password:string) {
    const body = {
      email: email,
      password: password
    };
    return this.http.post<any>(this.tokenURL, body);
  }

}
