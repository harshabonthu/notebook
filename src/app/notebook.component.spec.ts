/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { NoteBookAppComponent } from './notebook.component';

beforeEachProviders(() => [NoteBookAppComponent]);

describe('App: Notebook', () => {
  it('should create the app',
      inject([NoteBookAppComponent], (app: NoteBookAppComponent) => {
    expect(app).toBeTruthy();
  }));
});
