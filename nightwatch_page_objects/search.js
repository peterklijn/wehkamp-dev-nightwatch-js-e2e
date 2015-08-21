'use strict';

var searchCommands = {
  submit: function() {
    return this
      .click('@submitButton')//.api.pause(1000);
      .waitForElementVisible('.tile', 5000)
      .api.pause(100);

  },
  searchFor: function(searchTerm) {
    return this.waitForElementVisible('.search-bar', 5000).setValue('@searchBar', searchTerm);
  }
};

module.exports = {
  commands: [searchCommands],
  elements: {
    searchBar: { selector: '.search-bar .input--text' },
    submitButton: { selector: '.search-bar .btn--action' },
    searchResultText: { selector: '[ng-bind="total"]' }
  }
};
