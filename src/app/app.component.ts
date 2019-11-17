import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UsuarioService } from './services/usuario/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Casa',
      url: '/home',
      icon: 'home',
      color: '#5d94f3'
    },
    {
      title: 'Agregar Elemento',
      url: '/list',
      icon: 'add-circle-outline',
      color: 'green'
    },
    {
      title: 'Salir',
      url: '/login',
      icon: 'log-out',
      color: 'red'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private user: UsuarioService
  ) {
    this.initializeApp();
    console.log(this.user.usuario);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  salir(){
    this.user.Logout();
  }
}
