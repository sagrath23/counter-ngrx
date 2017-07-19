import { CounterNgrxPage } from './app.po';

describe('counter-ngrx App', () => {
  let page: CounterNgrxPage;

  beforeEach(() => {
    page = new CounterNgrxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
