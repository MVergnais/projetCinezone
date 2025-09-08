import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlay, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { MoviesList } from '../movies-list/movies-list';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FontAwesomeModule,MoviesList],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  faPlay = faPlay;
  faInfo = faCircleInfo;
}
