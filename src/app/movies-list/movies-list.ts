import { Component, inject, Input } from '@angular/core';
import { MoviesService } from '../common/movies-service';
import { Movie } from '../models/movie';
import { MovieCard } from '../movie-card/movie-card';

@Component({
  selector: 'app-movies-list',
  imports: [MovieCard],
  templateUrl: './movies-list.html',
  styleUrl: './movies-list.css',
})
export class MoviesList {
  private movieService = inject(MoviesService);
  movies!: Movie[];
  ngOnInit() {
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
