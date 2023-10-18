import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {

  constructor(private httpClient: HttpClient) { 

  }

  url = 'http://davids-restaurant.herokuapp.com/';
  categories = 'categories.json';
  menuItems = 'menu_items.json';

  obterCategoria(){
    return this.httpClient.get<any>(this.url + this.categories);
  }
}
