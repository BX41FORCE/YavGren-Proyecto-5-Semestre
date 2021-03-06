import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxQRCodeModule } from 'ngx-qrcode2';    
import { FormsModule }    from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './registro/registro.component';
import { CrearNoticiaComponent } from './crear-noticia/crear-noticia.component';
import { CrearEventoComponent } from './crear-evento/crear-evento.component';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';
import { ProductosComponent } from './productos/productos.component';
import { ListaComponent } from './lista/lista.component';

import {AuthGuard} from './auth/auth.guard';
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    InicioComponent,
    RegistroComponent,
    CrearNoticiaComponent,
    CrearEventoComponent,
    TestComponent,
    LoginComponent,
    ProductosComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxQRCodeModule,
    FormsModule,
    HttpClientModule ,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    BrowserAnimationsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
