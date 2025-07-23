import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ParceirosComponent } from './parceiros/parceiros.component';
import { ColetaComponent } from './coleta/coleta.component';
import { AreaAtuacaoComponent } from './area-atuacao/area-atuacao.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContatoComponent,
    SobreNosComponent,
    CarouselComponent,
    FooterComponent,
    ParceirosComponent,
    ColetaComponent
  ],
  imports: [
    BrowserModule,
    AreaAtuacaoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
