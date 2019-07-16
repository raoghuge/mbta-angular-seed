import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  user: any = {};
  public get isAuthenticated() {
    this.user = JSON.parse(localStorage.getItem('user'));
    return localStorage.getItem('token');
  }
  constructor(public router: Router) { }

  public logout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }

}
