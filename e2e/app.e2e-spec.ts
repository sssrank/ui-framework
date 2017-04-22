import { UiFrameworkPage } from './app.po';

describe('ui-framework App', () => {
  let page: UiFrameworkPage;

  beforeEach(() => {
    page = new UiFrameworkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
