import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Componentes NÃO-STANDALONE
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './home/home.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ParceirosComponent } from './parceiros/parceiros.component';

// Componentes STANDALONE
import { CarouselComponent } from './carousel/carousel.component';
import { ColetaComponent } from './coleta/coleta.component';
import { ContatoComponent } from './contato/contato.component';
import { AreaAtuacaoComponent } from './area-atuacao/area-atuacao.component';

@NgModule({
  // =============================================================
  // AQUI FICAM APENAS OS COMPONENTES ANTIGOS (NÃO-STANDALONE)
  // =============================================================
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SobreNosComponent,
    FooterComponent,
    CarouselComponent,
    ParceirosComponent
  ],
  // =============================================================
  // AQUI FICAM OS MÓDULOS E OS COMPONENTES NOVOS (STANDALONE)
  // =============================================================
  imports: [
    BrowserModule,
    NgbModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // Componentes standalone movidos para cá:
    
    ColetaComponent,
    ContatoComponent,
    AreaAtuacaoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }