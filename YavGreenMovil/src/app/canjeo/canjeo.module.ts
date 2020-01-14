import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CanjeoPageRoutingModule } from './canjeo-routing.module';

import { CanjeoPage } from './canjeo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CanjeoPageRoutingModule
  ],
  declarations: [CanjeoPage]
})
export class CanjeoPageModule {}
