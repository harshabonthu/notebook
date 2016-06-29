/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { NotebookAppComponent } from './notebook.component';

beforeEachProviders(() => [NotebookAppComponent]);

describe('App: Notebook', () => {
  it('should create the app',
      inject([NotebookAppComponent], (app: NotebookAppComponent) => {
    expect(app).toBeTruthy();
  }));
});
