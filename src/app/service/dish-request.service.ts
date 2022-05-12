import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DishRequestService {
  apiUrl :string = "https://api.spoonacular.com/recipes/complexSearch";
  apiKey :string = "98334ec2e25c4f35b8f55970e7151685";
  constructor(private http :HttpClient) {
  }
  searchDish (searchTerm :string) {
    return this.http.get<any>(this.apiUrl + "?query=" + searchTerm + "&addRecipeInformation=true" + "&apiKey=" + this.apiKey);
  }


}
