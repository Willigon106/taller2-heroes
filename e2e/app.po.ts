import {browser, by, element, ElementFinder} from 'protractor';

export class TourOfHeroesPage {
  navigateTo() {
    return browser.get('/');
  }
  getTop4Heroes() {
    return element.all(by.css('.module.hero')).all(by.tagName('h4')).getText();
  }

  navigateToHeroes() {
    element(by.linkText('Heroes')).click();
  }

  getAllHeroes() {
    return element(by.tagName('my-heroes')).all(by.tagName('li'));
  }
  
  getDetailHeroes() {
    return element(by.tagName('hero-detail')).element(by.tagName('h2')).getText();
  }
  
  getAllSearchResults() {
    return element.all(by.css('.search-result'));
  }

  enterNewHeroInInput(newHero: string) {
    element(by.tagName('input')).sendKeys(newHero);
    element(by.buttonText('Add')).click();
  }
  
  searchHeroInInput(searchHero: string) {
    element(by.tagName('input')).sendKeys(searchHero);
  }
  
  removeHero(rHero: string) {
	element(by.cssContainingText('.badge', rHero)).click();
	element(by.css('.selected')).element(by.buttonText('x')).click();
  }
  
  editHero(eHero: string, newName: string) {
	element(by.cssContainingText('.module.hero', eHero)).click();
	element(by.tagName('input')).sendKeys(' ' + newName);
	element(by.buttonText('Save')).click();
	browser.sleep(2000);
  }
  
  goHeroInDash(goHero: string) {
    element(by.tagName('input')).sendKeys(goHero);
	element(by.css('.search-result')).click();
  }
}