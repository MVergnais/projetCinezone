import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { MoviesList } from './movies-list/movies-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, MoviesList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('cinezone');
}
