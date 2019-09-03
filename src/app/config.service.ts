import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categorie } from './Categories.model';

@Injectable()
export class ConfigService {
  apiUrl="https://jsonp.afeld.me/?url=https%3A%2F%2Fapi.myglamapp.pl%2Fapi%2Fcategories%3Flanguage%3DEN";
  constructor(private http:HttpClient) {}
   getCategories() {
    return this.http.get<Categorie[]>(this.apiUrl);
  }
}