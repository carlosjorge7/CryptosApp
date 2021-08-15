import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCoin'
})
export class FilterCoinPipe implements PipeTransform {

  transform(coins: any[], valor: string): any[] {
    if(valor.length == 0){
      return coins;
    }
    valor = valor.toLowerCase();

    // tipo foreach --> la funcion filter devuelve al array filtrado
    return coins.filter((coin) => {
      return coin.name.toLowerCase().includes(valor);
    });
  }

}
