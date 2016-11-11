import { TypescriptdesignpatternsPage } from './app.po';

describe('typescriptdesignpatterns App', function() {
  let page: TypescriptdesignpatternsPage;

  beforeEach(() => {
    page = new TypescriptdesignpatternsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
