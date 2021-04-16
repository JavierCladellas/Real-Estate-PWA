import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InfoCompletaComponent } from './../info-completa/info-completa.component';

@Component({
  selector: 'app-detalle-general',
  templateUrl: './detalle-general.component.html',
  styleUrls: ['./detalle-general.component.scss'],
})
export class DetalleGeneralComponent implements OnInit {
  viewEntered = false;
  @Input() todo: any;
  constructor( private modalController:ModalController) { }
  ngOnInit() { }

  cerrar(){
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  ionViewDidEnter() {
    this.viewEntered = true;
  }

  async mostrarModal2() {
    const modal = await this.modalController.create({
      component: InfoCompletaComponent,
      componentProps: {
        'todo2': this.todo
      }
    });
    return await modal.present();
  }

  like(){
    console.log("like");
    let elem = document.querySelectorAll(".like-button") as NodeListOf<HTMLElement>;

    for(let i = 0; i < elem.length; i++){
      let color = elem[i].style.getPropertyValue('--background');
      if(color == 'transparent'){
        elem[i].style.setProperty('--background', 'red');
      }
      else{
        elem[i].style.setProperty('--background', 'transparent');
      }
    }
  }


  
}
