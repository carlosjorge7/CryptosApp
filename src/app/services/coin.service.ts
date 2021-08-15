import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  APICOIN = 'https://api.coingecko.com/api/v3/coins';

  constructor(private http: HttpClient) { }

  getAllCoins(tipo: string) {
    return this.http.get<any>(`${this.APICOIN}/markets?vs_currency=${tipo}`);
  }

  getCoinChart(coin: string, tipo: string, days: string | number) {
    return this.http.get<any>(`${this.APICOIN}/${coin}/market_chart?vs_currency=${tipo}&days=${days}`)
  }



}
