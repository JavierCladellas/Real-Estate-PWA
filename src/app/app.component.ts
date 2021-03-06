import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { Plugins, StatusBarStyle } from '@capacitor/core';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  dark = false;
  constructor(
    private platform: Platform ,
  ) {
    this.initializeApp();
  }


  async initializeApp() {
    const { SplashScreen, StatusBar } = Plugins;
		try{
			await SplashScreen.hide();
			await StatusBar.setStyle( { style: StatusBarStyle.Light } );
			if( this.platform.is( 'android' ) ) {
				StatusBar.setBackgroundColor( { color:'#CDCDCD' } );
			}
		}catch(err){
			console.log("Navegador web",err);
    }
    /*   
    this.checkUpdate();
    setInterval(() => {
      this.swUpdate.checkForUpdate();
    } , 30000); 
    */
  }
}
