import { NotebookPage } from './app.po';

describe('notebook App', function() {
  let page: NotebookPage;

  beforeEach(() => {
    page = new NotebookPage();
  });

  it('should display message saying Enter Some Notes Here in Page 1', () => {
    page.navigateTo();
    expect(page.getPaperText()).toEqual('Enter Some Notes Here in Page 1');
  });
});
