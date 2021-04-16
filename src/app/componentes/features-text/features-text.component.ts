import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-features-text',
  templateUrl: './features-text.component.html',
  styleUrls: ['./features-text.component.scss'],
})
export class FeaturesTextComponent implements OnInit {
  @Input() info:any;
  constructor(private modalController:ModalController) { }

  ngOnInit() {}

  cerrar(){

    this.modalController.dismiss({
      'dismissed': true
    });

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
