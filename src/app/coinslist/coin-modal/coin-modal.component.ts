import { Component, OnInit, Input} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CoinService } from '../../services/coin.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-coin-modal',
  templateUrl: './coin-modal.component.html',
  styleUrls: ['./coin-modal.component.scss'],
})
export class CoinModalComponent implements OnInit {

  // si edito, recibo la data 
  @Input() coin;

  data: any;

  constructor(private modalCtrl: ModalController,
              private coinService: CoinService) { }

  time: number;

  ngOnInit() {
    if(this.coin) {
      this.data = this.coin;
    }

    // Aqui recupero los datos de la grafica
    this.coinService.getCoinChart(this.data.id, 'eur', '1')
      .subscribe(res => {
        let totalItems = res['prices'].length;
        let arrayPrices = new Array();

        for(let i = 0; i < totalItems; i++) {
          arrayPrices.push(res['prices'][i][1])
        }

        const $grafica = document.querySelector("#coinsChart");
        const etiquetas = arrayPrices
        const medias = {
            label: 'Evolución diaria',
            data: arrayPrices,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 0.25)', 
            borderWidth: 0.25
        };
        new Chart($grafica, {
            type: 'line',
            data: {
                labels: etiquetas,
                datasets: [
                  medias
                ]
            },
            options: {
             
              scales: {
                  yAxes: [{
                        ticks: {
                            min: this.data.low_24h,
                            max: this.data.high_24h,
                            stepSize: 10
                        }
                    }]
              }
          }
        }); 
    }); 

    
  }

 
  closeModal() {
    this.modalCtrl.dismiss(null, 'closed')
  }

}
