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
  
  removeHero() {
	element(by.cssContainingText('.badge', '12')).click();
	element(by.css('.selected')).element(by.buttonText('x')).click();
  }
}