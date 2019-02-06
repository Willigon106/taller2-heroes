import { TourOfHeroesPage } from './app.po';

describe('Tour of heroes Dashboard', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
  });

  it('should display top 4 heroes', () => {
    page.navigateTo();
    expect(page.getTop4Heroes()).toEqual(['Mr. Nice', 'Narco', 'Bombasto', 'Celeritas']);
  });

  it('should navigate to heroes', () => {
    page.navigateToHeroes();
    expect(page.getAllHeroes().count()).toBe(11);
  });
  
  it('should search heroes', () => {
	page.navigateTo();
    page.searchHeroInInput('Bombasto');
	expect(page.getAllSearchResults().count()).toBe(1);
  });
  
  it('should edit heroes dashboard', () => {
    page.editHero('Mr. Nice', 'Motitas');
	expect(page.getTop4Heroes()).toEqual(['Mr. Nice Motitas', 'Narco', 'Bombasto', 'Celeritas']);
  });
  
  it('should go heroe dashboard', () => {
    page.navigateTo();
    page.goHeroInDash('Zero');
	expect(page.getDetailHeroes()).toContain('Zero');
  });
  
  it('should go heroe - search', () => {
	page.navigateTo();
    page.goHeroInSearch('Magneta');
	expect(page.getDetailHeroes()).toContain('Magneta');
  });
  
});

describe('Tour of heroes, heroes page', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateToHeroes();
  });

  it('should add a new hero', () => {
    const currentHeroes = page.getAllHeroes().count();
    page.enterNewHeroInInput('My new Hero');
    expect(page.getAllHeroes().count()).toBe(currentHeroes.then(n => n + 1));
  });
  
  it('should remove a hero with id', () => {
	const currentHeroes = page.getAllHeroes().count();
    page.removeHero('12');
	expect(page.getAllHeroes().count()).toBe(currentHeroes.then(n => n - 1));
  });
  
  it('should go heroe - heroes list', () => {
    page.goHeroInHeroes('14');
	expect(page.getDetailHeroes()).toContain('Celeritas');
  });
  
});
