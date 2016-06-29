export class NotebookPage {
  navigateTo() {
    return browser.get('/');
  }

  getPaperText() {
    return element(by.css('notebook-paper p')).getText();
  }
}
