import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AppServiceService {

  constructor(
    public httpClient: HttpClient,
  ) { }

  getData() {
    return this.httpClient.get('https://hn.algolia.com/api/v1/search_by_date?tags=story');
  }
}
