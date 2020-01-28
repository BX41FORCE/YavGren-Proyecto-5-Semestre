import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./logout/logout.module').then(m => m.LogoutPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then(m => m.RegistroPageModule)
  },
  {
    path: 'lector-qr',
    loadChildren: () => import('./lector-qr/lector-qr.module').then(m => m.LectorQrPageModule)
  },
  {
    path: 'canjeo',
    loadChildren: () => import('./canjeo/canjeo.module').then(m => m.CanjeoPageModule)
  },
  {
    path: 'persona',
    loadChildren: () => import('./persona/persona.module').then(m => m.PersonaPageModule)
  },
  {
    path: 'evento',
    loadChildren: () => import('./evento/evento.module').then(m => m.EventoPageModule)
  },
  {
    path: 'noticia',
    loadChildren: () => import('./noticia/noticia.module').then(m => m.NoticiaPageModule)
  },
  {
    path: 'evento-detalle',
    loadChildren: () => import('./evento-detalle/evento-detalle.module').then(m => m.EventoDetallePageModule)
  },
  {
    path: 'noticia-detalle',
    loadChildren: () => import('./noticia-detalle/noticia-detalle.module').then(m => m.NoticiaDetallePageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  }





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
