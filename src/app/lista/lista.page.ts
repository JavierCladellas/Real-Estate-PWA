import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonInfiniteScroll } from '@ionic/angular';
import { InfoCompletaComponent } from './../componentes/info-completa/info-completa.component';
import { FiltersComponent } from '../componentes/filters/filters.component';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  puntos = [
    {
      "name": "Sonsonate",
      "lat": 13.714975,
      "lng": -89.4739356,
      "foto":"https://i.pinimg.com/originals/59/8f/4f/598f4ff8ecbd39365ba659845551e28b.jpg",
      "direccion":"Col Angélica 16 Av Nte No 1-7A, Sonsonate",
      "fotos":[
        {"url":"https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"},
        {"url":"https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
      ],
      "precio":"$100,000",
      "precioK":"100K"
    },
    {
      "name": "San Salvador",
      "lat": 13.701632,
      "lng": -89.213674,
      "foto":"https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "direccion":"Col Centro América Cl San Antonio Abad No 1921, San Salvador",
      "fotos":[
        {"url":"https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"},
        {"url":"https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"},
        {"url":"https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"}
      ],
      "precio":"$300,000",
      "precioK":"300K"
    },
    {
      "name": "San Miguel",
      "lat": 13.460504,
      "lng": -88.176101,
      "foto":"https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "direccion":"Bo El Calvario 2 Av Sur No 402-A Ent 7 Y 5 Cl Ote, San Miguel",
      "fotos":[
        {"url":"https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"},
        {"url":"https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"},
        {"url":"https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"}
      ],
      "precio":"$500,000",
      "precioK":"500K"
    },
    {
      "name": "Escalon",
      "lat": 13.701874,
      "lng": -88.249495,
      "foto":"https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      "direccion":"Col Y Ps Gral Escalón No 5338, San Salvador",
      "fotos":[
        {"url":"https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"},
        {"url":"https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"},
        {"url":"https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"}
      ],
      "precio":"$650,000",
      "precioK":"650K"
    },
    {
      "name": "Berlín",
      "lat": 13.496880,
      "lng": -88.530069,
      "foto":"https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "direccion":"Bo San José 4 Av Sur, Usulutan",
      "fotos":[
        {"url":"https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"},
        {"url":"https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"},
        {"url":"https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"}
      ],
      "precio":"$90,000",
      "precioK":"90K"
    },
    {
      "name": "Santa Ana",
      "lat": 13.990156,
      "lng": -89.555203,
      "foto":"https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "direccion":"Bo San Rafael 3 Cl Ote No 44 Ent 11 Y 13 Av Sur,Santa Ana",
      "fotos":[
        {"url":"https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"},
        {"url":"https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"},
        {"url":"https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"}
      ],
      "precio":"$130,000",
      "precioK":"130K"
    },
    {
      "name": "San Juan Nonualco",
      "lat": 13.503390,
      "lng": -88.897212,
      "foto":"https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "direccion":" Col San Juan Prol 2 Av Sur, San Juan Nonualco, La Paz",
      "fotos":[
        {"url":"https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"},
        {"url":"https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"},
        {"url":"https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"}
      ],
      "precio":"$230,000",
      "precioK":"230K"
    },
    {
      "name": "Mejicanos",
      "lat": 13.733829,
      "lng": -89.215725,
      "foto":"https://images.pexels.com/photos/323772/pexels-photo-323772.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "direccion":"Urb Metrópolis C C Metrópolis Loc 57 Mejic",
      "fotos":[
        {"url":"https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"},
        {"url":"https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"},
        {"url":"https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"}
      ],
      "precio":"$740,000",
      "precioK":"740K"
    },
    {
      "name": "Flor Blanca",
      "lat": 13.696734,
      "lng": -89.213084,
      "foto":"https://images.pexels.com/photos/259751/pexels-photo-259751.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "direccion":"Col Flor Blanca 6/10 Cl Pte Y 27 Av Sur No 1435, San Salvador",
      "fotos":[
        {"url":"https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"},
        {"url":"https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"},
        {"url":"https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"}
      ],
      "precio":"$185,000",
      "precioK":"185K"
    },
    {
      "name": "Apopa",
      "lat": 13.726737,
      "lng": -89.172672,
      "foto":"https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      "direccion":" Rpto Apopa Cl Las Palmas No 8-B Apopa, Apopa",
      "fotos":[
        {"url":"https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"},
        {"url":"https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"},
        {"url":"https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"}
      ],
      "precio":"$263,000",
      "precioK":"263K"
    }
  ];

  constructor(
    private modalController: ModalController ) { }
  ngOnInit() {
  }

  async mostrarModal2(todo:any) {

    const modal = await this.modalController.create({
      component: InfoCompletaComponent,
      componentProps: {
        'todo2': todo
      }
    });
    return await modal.present();
  }

  async mostrarModalFilters() {
    const modal = await this.modalController.create({
      component: FiltersComponent,
      cssClass:'filter-modal'
    });
    return await modal.present();
  }

  doRefresh(event) {
      setTimeout(() => {event.target.complete()},1000)
  }
  
  loadData(event) {
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }
  

  like(elem : any){

    let color = elem.style.getPropertyValue('--background');
      if(color == 'transparent'){
        elem.style.setProperty('--background', 'red');
      }
      else{
        elem.style.setProperty('--background', 'transparent');
      }
  }



}

