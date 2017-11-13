import { Session5Assignment4Page } from './app.po';

describe('session5-assignment4 App', () => {
  let page: Session5Assignment4Page;

  beforeEach(() => {
    page = new Session5Assignment4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
