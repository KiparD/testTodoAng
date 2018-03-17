import { TodoAppAng2Page } from './app.po';

describe('todo-app-ang2 App', function() {
  let page: TodoAppAng2Page;

  beforeEach(() => {
    page = new TodoAppAng2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
