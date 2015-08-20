module.exports = {
  
before: function(browser) {
    console.log("Setting up...");
    browser
      .windowSize('current', 1024, 768)
      .url(this.client.launchUrl) 
      .setCookie({
        name: 'NlUserModalShown', 
        value: 'true', 
        path: '/', 
        domain: '.wehkamp.com'})
      .setCookie({
        name: 'cookiebarCookie', 
        value: 'accept', 
        path: '/', 
        domain: '.wehkamp.com'})
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
        domain: '.wehkamp.com'})
      .url(this.client.launchUrl)
      .pause(2000)
      .useCss()
  },

  'Hello world test' : function (browser) {
    browser
      .waitForElementVisible('.search-bar', 1000)
      .setValue('.search-bar .input--text', 'hello world!')
      .click('.search-bar .btn--action')
      .pause(1000)
      .assert.containsText('h1', 'Zoekresultaten');
  },

  'Hello world 2 test' : function (browser) {
    browser
      .waitForElementVisible('.search-bar', 1000)
      .setValue('.search-bar .input--text', 'hello world 2!')
      .click('.search-bar .btn--action')
      .pause(1000)
      .assert.containsText('h1', 'Zoekresultaten');
  }

};
