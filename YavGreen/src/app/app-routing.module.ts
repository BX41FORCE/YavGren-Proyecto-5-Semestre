import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { CrearNoticiaComponent } from './crear-noticia/crear-noticia.component';
import { CrearEventoComponent } from './crear-evento/crear-evento.component'
import { TestComponent } from './test/test.component'
import { ProductosComponent } from './productos/productos.component';


const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'crear_noticia', component: CrearNoticiaComponent },
  { path: 'crear_evento', component: CrearEventoComponent },
  { path: 'test', component: TestComponent },
  { path: 'productos', component: ProductosComponent },
  { path: '', component: LoginComponent },
  { path: '**', redirectTo: '/inicio', pathMatch: 'full' },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
