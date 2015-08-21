'use strict';

module.exports = {
  before: function(browser) {
    console.log("Setting up...");
    browser
      .windowSize('current', 1040, 768)
      .url(this.client.launchUrl)
      .setCookie({
        name: 'NlUserModalShown',
        value: 'true',
        path: '/',
        domain: '.developmentci.rebb.baseless.nl'})
      .setCookie({
        name: 'cookiebarCookie',
        value: 'accept',
        path: '/',
        domain: '.developmentci.rebb.baseless.nl'})
      .waitForElementVisible("body", 1000)
  },

  after: function(browser) {
    browser.end()
    console.log("Closing down...");
  },

  beforeEach: function(browser) {
    console.log('before each');
    browser
      .setCookie({
        name: 'rebb_shopper',
        value: undefined,
        path: '/',
        domain: '.developmentci.rebb.baseless.nl'})
      .url(this.client.launchUrl)
      .pause(2000)
      .useCss();
  },

  'Search for a broek and expect the title of that product to contain broek' : function (client) {
    client.page.search()
      .searchFor('broek')
      .submit()
      .assert.containsText('h1', 'Zoekresultaten')
      .page.productlist_helper()
      .waitForElementVisible('@firstProduct', 7000)
      .click('@firstProductTitle')
      .api.pause(1000)
      .page.product_helper()
      .assert.containsText('@title', 'broek');
  },

  'Search page should contain the search marker in the URL for Divolte': function (client) {
    client.page.search()
      .searchFor('jumpsuit')
      .submit()
      .assert.urlContains('manual');
  },

  'Search page should remember the search term': function (client) {
    var searchPage = client.page.search();
    searchPage.searchFor('jumpsuit').submit();
    searchPage.expect.element('@searchBar').to.have.attribute('value').equals('jumpsuit');
  }
};
