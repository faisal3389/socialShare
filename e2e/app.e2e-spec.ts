import { SocialSharePage } from './app.po';

describe('social-share App', () => {
  let page: SocialSharePage;

  beforeEach(() => {
    page = new SocialSharePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
