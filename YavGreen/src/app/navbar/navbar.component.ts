import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../servicios/authentication.service';
import { ResourceLoader } from '@angular/compiler';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,) { }

  ngOnInit() {
  }
  salir(){
    this.authenticationService.deleteToken();
    location.reload();
  }

}
