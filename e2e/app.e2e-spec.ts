import { AminsBlogPage } from './app.po';

describe('amins-blog App', () => {
  let page: AminsBlogPage;

  beforeEach(() => {
    page = new AminsBlogPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
