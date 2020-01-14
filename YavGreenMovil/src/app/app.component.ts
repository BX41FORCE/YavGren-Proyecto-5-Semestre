import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'help'
    },
    {
      title: 'Registro',
      url: '/registro',
      icon: 'help'
    },
    {
      title: 'Lector de Puntos',
      url: '/lector-qr',
      icon: 'qr-scanner'
    },
    {
      title: 'Perfil',
      url: '/persona',
      icon: 'person'
    },
    {
      title: 'Canjeo',
      url: '/canjeo',
      icon: 'appstore'
    },
    {
      title: 'Noticias',
      url: '/noticia',
      icon: 'browsers'
    },
    {
      title: 'Evento',
      url: '/evento',
      icon: 'browsers'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
