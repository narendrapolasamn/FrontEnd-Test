

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MusicSearchAPIService {

  //this can be also use from environment config
  private readonly apiBaseUrl = 'https://itunes.apple.com/'; 

  
  constructor(private httpClient: HttpClient) { }

  
  getMusicSearch(searchValue: string): Observable<any> {
    return this.httpClient.get(this.apiBaseUrl + 'search?term=' + searchValue+'&enitity=album');
  }
}
