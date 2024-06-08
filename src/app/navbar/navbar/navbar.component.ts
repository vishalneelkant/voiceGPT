import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service-auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  

  constructor(private router: Router, private authService: AuthService){}

  login(): void{
    this.router.navigate(['/login']);
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getHome():void {
    if(this.authService.isLoggedIn){
      this.router.navigate(['/home']);
    }
  }

}
