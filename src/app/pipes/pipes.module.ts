import { NgModule } from '@angular/core';
import { FilterCoinPipe } from './filter-coin.pipe';

@NgModule({
  declarations: [FilterCoinPipe],
  exports: [FilterCoinPipe]
})
export class PipesModule { }