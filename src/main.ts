import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { NoteBookAppComponent, environment, APP_ROUTER_PROVIDERS } from './app';

if (environment.production) {
  enableProdMode();
}

bootstrap(NoteBookAppComponent, [
  APP_ROUTER_PROVIDERS
]);

