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

    this.client.page.search()
      .searchFor('jumpsuit')
      .submit();

  },

  'Search page should contain the search marker in the URL for Divolte': function (client) {
    client.page.search().assert.urlContains('manual');
  },

  'Search page should remember the search term': function (client) {
    client.page.search().expect.element('@searchBar').to.have.attribute('value').equals('jumpsuit');
  },


};
