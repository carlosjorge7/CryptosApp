import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CoinslistPageRoutingModule } from './coinslist-routing.module';
import { CoinslistPage } from './coinslist.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoinslistPageRoutingModule,
    PipesModule
  ],
  declarations: [CoinslistPage]
})
export class CoinslistPageModule {}
