import { Component, ElementRef, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { DOCUMENT} from '@angular/common';
import { environment } from './../../environments/environment.prod';
import { ModalController } from '@ionic/angular';
import { DetalleGeneralComponent } from './../componentes/detalle-general/detalle-general.component';
import { FiltersComponent } from '../componentes/filters/filters.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit{
  @ViewChild('mapCanvas', { static: true }) mapElement: ElementRef;
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
    @Inject(DOCUMENT) 
    private doc: Document,
    private modalController:ModalController
  ) {  }

  async ngAfterViewInit(){
    const appEl = this.doc.querySelector('ion-app');
    let map:any;
    var markers = [];
    var i;
    const googleMaps = await getGoogleMaps( environment.apiKeyMaps );
    const mapEle = this.mapElement.nativeElement;

    map = new googleMaps.Map(
      mapEle, 
      {
        center: { "lat": 13.677914, "lng": -88.8183847 },
        zoom: 8,
        styles: null
      }
    );

    googleMaps.event.addListenerOnce(
      map, 
      'idle', 
      () => {
        mapEle.classList.add('show-map');
      }
    );
    
    googleMaps.event.addListener(
      map,
      'zoom_changed',
      () => {
      var zoom = map.getZoom();
      for (i = 0; i < 10; i++) {
        markers[i].setVisible(zoom >= 10);
      }
      });

    this.puntos.forEach(
      (markerData: any) => {
        const infoWindow = new googleMaps.InfoWindow({
          content: `<h5>${markerData.name}</h5>`
        });
        const marker = new googleMaps.Marker(
          {
            position: markerData,
            map,
            title: markerData.name,
            label: 
            {
              text:markerData.precioK,
              fontSize:'9px',
              fontWeight:'bolder'
            },
            visible: false
          }
        );
        markers.push(marker);
        marker.addListener(
          'click', 
          () =>{
            this.mostrarModal1(markerData);
            }
        );
      }
    );
  }
  

  async mostrarModal1(info:any) {
    const modal = await this.modalController.create({
      component: DetalleGeneralComponent,
      componentProps: {
        'todo': info
      },
      cssClass:'modal1'
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

  
}

function getGoogleMaps(apiKey: string): Promise<any> {
  const win = window as any;
  const googleModule = win.google;
  if (googleModule && googleModule.maps){
    return Promise.resolve(googleModule.maps);
  }
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.31`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    script.onload = () => {
      const googleModule2 = win.google;
      if (googleModule2 && googleModule2.maps) {
        resolve(googleModule2.maps);
      } else {
        reject('google maps no esta disponible');
      }
    };
  });
}
