import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { LectorQrPageRoutingModule } from './lector-qr-routing.module';
import { LectorQrPage } from './lector-qr.page';

import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LectorQrPageRoutingModule,
    NgxQRCodeModule
  ],
  declarations: [LectorQrPage],
})
export class LectorQrPageModule { }
