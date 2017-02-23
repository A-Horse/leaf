import { LeafPage } from './app.po';

describe('leaf App', () => {
  let page: LeafPage;

  beforeEach(() => {
    page = new LeafPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
