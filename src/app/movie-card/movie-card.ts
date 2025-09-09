import { Component, Input } from '@angular/core';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-movie-card',
  imports: [],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.css',
})
export class MovieCard {
  @Input() data: any;
}
