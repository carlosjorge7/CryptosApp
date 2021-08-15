import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoinslistPage } from './coinslist.page';

const routes: Routes = [
  {
    path: '',
    component: CoinslistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoinslistPageRoutingModule {}
