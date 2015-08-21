
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

  'Hello world test' : function (browser) {
    // Search for a trui from the homepage:

    var commonPage = browser.page.commonPage();
    var productName;

    commonPage
      .setValue('@searchBar', 'trui')
      .click('@searchButtonElement')
      .waitForElementPresent('h1', 10000)
      .expect.element('@title').text.to.equal('Zoekresultaten');

    commonPage
      .getText('@firstProduct', function (name) {
        productName = name;
      })
      .click('@firstProduct')
      .waitForElementPresent('@productPage', 10000)
      .expect.element('@title').text.to.equal('ONLY trui');

    commonPage
      .click('@shoppingBasketButtonElement')
      .waitForElementPresent('@basketPage', 10000)
      .expect.element('@title').text.to.equal('Winkelmand');

    // // Check if product is in basket:
    // expect(basketPage.firstBasketItemDescription.getText()).toBe(productName);
    //
    // // Go to checkout:
    // pageHelper.clickAndWaitForUrlChange(basketPage.checkOutButton);
    //
    // // Fill in form and go to payment:
    // checkOutPage.fillShippingInformation();
    // checkOutPage.submitAddressButton.click();
    //
    // var thankyouPageExpectations = function() {
    //   expect(element(by.css('h1')).getText()).toContain('Hartelijk dank voor je bestelling!');
    //   expect(thankyouPage.thankYouProductName.getText()).toBe(productName);
    // };
    //
    // checkOutPage.payWithAdyenAndHandleThankYouPageExpectations(thankyouPageExpectations);
  },

  // 'Hello world 2 test' : function (browser) {
  //   browser
  //     .waitForElementVisible('.search-bar', 1000)
  //     .setValue('.search-bar .input--text', 'hello world 2!')
  //     .click('.search-bar .btn--action')
  //     .pause(1000)
  //     .assert.containsText('h1', 'Zoekresultaten');
  // }

};
