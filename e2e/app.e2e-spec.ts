import { NotebookPage } from './app.po';

describe('notebook App', function() {
  let page: NotebookPage;

  beforeEach(() => {
    page = new NotebookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
