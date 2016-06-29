import { RouterConfig } from '@angular/router';
import { NotebookPaperComponent } from './notebook-paper.component';

export const NotebookPaperRoutes: RouterConfig = [
  { path: 'page/:id', component: NotebookPaperComponent },
  { path: '', redirectTo: '/page/1' },
];