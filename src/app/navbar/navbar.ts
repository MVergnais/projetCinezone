import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';

import { from } from 'rxjs';
//import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  searchTerm = '';

  constructor(private router: Router) {}

  search() {
    const q = this.searchTerm.trim();
    if (q) this.router.navigate(['/movies'], { queryParams: { q } });
  }
}
