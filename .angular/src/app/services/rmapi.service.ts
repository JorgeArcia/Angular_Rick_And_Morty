import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class RmapiService {

  constructor(private http: HttpClient) { }

  getEpisodes(){
    return this.http.get('https://rickandmortyapi.com/api/episode');
  }

  getPersonajes(){
    return this.http.get('https://rickandmortyapi.com/api/character');
  }

  getPersonaje(id:number){
    return this.http.get('https://rickandmortyapi.com/api/character/' + id);
  }



}
