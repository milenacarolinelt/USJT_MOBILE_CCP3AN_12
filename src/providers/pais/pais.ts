import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PaisProvider {

  private baseApiPath = 'https://restcountries.eu/rest/v2/all';

  constructor(public http: Http) {
    console.log('Hello PaisProvider Provider');
  }

  getPaises() {
    return this.http.get(this.baseApiPath);
  }
}
