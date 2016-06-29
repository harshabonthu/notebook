import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { NotebookAppComponent, environment, APP_ROUTER_PROVIDERS } from './app';

if (environment.production) {
  enableProdMode();
}

bootstrap(NotebookAppComponent, [
  APP_ROUTER_PROVIDERS
]);

