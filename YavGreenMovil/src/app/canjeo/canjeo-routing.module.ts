import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanjeoPage } from './canjeo.page';

const routes: Routes = [
  {
    path: '',
    component: CanjeoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CanjeoPageRoutingModule {}
