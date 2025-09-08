import { Injectable } from '@angular/core';
//import de mon model de movie-card
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  // getMovies() → GET /movies - Stocke et renvoie la liste
  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.baseUrl}movies`);
  }
}
