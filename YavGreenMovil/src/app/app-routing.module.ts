import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule), canActivate: [AuthGuard]
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./logout/logout.module').then(m => m.LogoutPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then(m => m.RegistroPageModule)
  },
  {
    path: 'lector-qr',
    loadChildren: () => import('./lector-qr/lector-qr.module').then(m => m.LectorQrPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'canjeo',
    loadChildren: () => import('./canjeo/canjeo.module').then(m => m.CanjeoPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'persona',
    loadChildren: () => import('./persona/persona.module').then(m => m.PersonaPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'evento',
    loadChildren: () => import('./evento/evento.module').then(m => m.EventoPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'noticia',
    loadChildren: () => import('./noticia/noticia.module').then(m => m.NoticiaPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'evento-detalle/:id',
    loadChildren: () => import('./evento-detalle/evento-detalle.module').then(m => m.EventoDetallePageModule), canActivate: [AuthGuard]
  },
  {
    path: 'noticia-detalle/:id',
    loadChildren: () => import('./noticia-detalle/noticia-detalle.module').then(m => m.NoticiaDetallePageModule), canActivate: [AuthGuard]
  },
  {
    path: '**',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule), canActivate: [AuthGuard]
  },
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  }





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
