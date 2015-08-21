
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

  after : function(browser) {
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
      .useCss()
  },

  'Happy flow test' : function (browser) {
    // Search for a trui from the homepage:

    var commonPage = browser.page.common_page();
    var productName;

    browser.page.search()
      .searchFor('trui')
      .submit()
      .page.common_page()
      .waitForElementPresent('h1', 10000)
      .expect.element('@title').text.to.equal('Zoekresultaten');

    commonPage
      .getText('@firstProduct', function (result) {
        productName = (result.status === 0 && result.value);
      })
      .click('@firstProduct')
      .waitForElementPresent('@productPage', 10000)
      .expect.element('@title').text.to.equal('ONLY trui');

    commonPage
      .click('@shoppingBasketButtonElement')
      .waitForElementPresent('@basketPage', 10000)
      .expect.element('@title').text.to.equal('Winkelmand');

    browser
      .perform(function (client, done) {
        commonPage.expect.element('@firstBasketItemDescription').text.to.equal(productName);
        done();
      });

    commonPage
      .click('@checkOutButton')
      .enterShipping()
      .click('@submitAddressButton')
      .waitForElementPresent('@mrCashRadio', 10000)
      .payWithAdyen()
      // .expect.element('@title').text.to.equal('Hartelijk dank voor je bestelling!')
  }

};
