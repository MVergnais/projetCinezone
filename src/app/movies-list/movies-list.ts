import { Component, inject, Input } from '@angular/core';
import { MovieCard } from '../movie-card/movie-card';

@Component({
  selector: 'app-movies-list',
  imports: [MovieCard],
  templateUrl: './movies-list.html',
  styleUrl: './movies-list.css',
})
export class MoviesList {}
