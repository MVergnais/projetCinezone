import { Component } from '@angular/core';
import { Movie } from '../models/movie';
import { MoviesService } from '../common/movies-service';

@Component({
  selector: 'app-movie-card',
  imports: [],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.css',
})
export class MovieCard {
  movies: Movie[] = [];

  constructor(private movieService: MoviesService) {}

  ngOnUnit() {
    this.movieService.getMovies().subscribe({
      next: (movies) => {
        this.movies = movies;
      },
      error: (err) => {
        console.error('Erreur de chargement des films');
      },
    });
  }
}
