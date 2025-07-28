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
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SobreNosComponent,
    CarouselComponent,
    FooterComponent,
    ParceirosComponent
    
  ],
  imports: [
    BrowserModule,
    ContatoComponent,
    AreaAtuacaoComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ColetaComponent,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
