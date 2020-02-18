import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AuthenticationService } from './servicio/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Inicio',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Perfil',
      url: '/persona',
      icon: 'person'
    },
    /*{
      title: 'Lector de Puntos',
      url: '/lector-qr',
      icon: 'qr-scanner'
    },*/
    {
      title: 'Lista de Productos',
      url: '/canjeo',
      icon: 'md-card'
    }, {
      title: 'Noticias',
      url: '/noticia',
      icon: 'md-paper'
    },
    {
      title: 'Eventos',
      url: '/evento',
      icon: 'md-calendar'
    }/*,
    {
      title: 'Login',
      url: '/login',
      icon: 'md-contact'
    },
    {
      title: 'Registro',
      url: '/registro',
      icon: 'md-person-add'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }*/
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authenticationService: AuthenticationService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  salir() {
    this.authenticationService.deleteToken();
    this.authenticationService.deleteCorreo();
    this.authenticationService.deletePersonaLS();
    location.reload();
  }
}
