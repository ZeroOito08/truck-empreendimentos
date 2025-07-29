// src/main.ts

import '@angular/localize/init'; // <-- ADICIONE ESTA LINHA NO TOPO

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));