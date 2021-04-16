import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
/* import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx'; */
import { InfoCompletaComponent } from './componentes/info-completa/info-completa.component';
import { DetalleGeneralComponent } from './componentes/detalle-general/detalle-general.component';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FiltersComponent } from './componentes/filters/filters.component';
import { FotoSlidesComponent } from './componentes/foto-slides/foto-slides.component';
import { FeaturesTextComponent } from './componentes/features-text/features-text.component';

@NgModule({
  declarations: [AppComponent,DetalleGeneralComponent,InfoCompletaComponent,FiltersComponent,FotoSlidesComponent,FeaturesTextComponent],
  entryComponents: [DetalleGeneralComponent,InfoCompletaComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule],
  providers: [
/*     StatusBar,
    SplashScreen, */
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
