import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DishRequestService {
  apiUrl :string = "https://api.spoonacular.com/recipes/complexSearch";
  apiKey :string = "";
  constructor(private http :HttpClient) {
  }
  searchDish (searchTerm :string) {
    return this.http.get<any>(this.apiUrl + "?query=" + searchTerm + "&apiKey=" + this.apiKey);
  }


}
