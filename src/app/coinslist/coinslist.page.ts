import { Component, OnInit } from '@angular/core';
import { CoinService} from '../services/coin.service';
import { ModalController } from '@ionic/angular';
import { CoinModalComponent } from './coin-modal/coin-modal.component';

@Component({
  selector: 'app-coinslist',
  templateUrl: './coinslist.page.html',
  styleUrls: ['./coinslist.page.scss'],
})
export class CoinslistPage implements OnInit {

  coins = [];
  
  textoBuscar = '';


  constructor(private coinService: CoinService,
              private modalCtrl: ModalController) {}

  buscarCoin(event) {
    const valor = event.target.value;
    this.textoBuscar = valor;
    console.log(this.textoBuscar)
  }

  async ngOnInit() {
    let tipo = 'eur';
    this.coinService.getAllCoins(tipo).subscribe(res => {
      this.coins = res;
    });
  }

  doRefresh(event) {
    setTimeout(() => {
      let tipo = 'eur';
      this.coinService.getAllCoins(tipo).subscribe(res => {
        this.coins = res;
      });
      event.target.complete();
    }, 2000);
  }

 
  infoCrypto(coin) {
    console.log(coin)
    this.modalCtrl.create({
      component: CoinModalComponent,
      componentProps: { coin } // aqui pasamos el objeto al componente modal
    })
    .then(modal => {
      modal.present();
    })
  }
}
