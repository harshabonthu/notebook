import { provideRouter, RouterConfig } from '@angular/router';
import {NotebookPaperRoutes } from './notebook-paper';

export const routes: RouterConfig = [  ...NotebookPaperRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];