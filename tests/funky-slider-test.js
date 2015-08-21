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
      .page.search()
      .getText('@searchResultText', function (result) {
        client.page.productlist_helper()
        .changePriceFiltering()
        .pause(5000)
        .perform(function (client, done) {
          client.expect.element('[ng-bind="total"]').text.not.to.equal(result.value);
          done();
        })
      });
  },
};
