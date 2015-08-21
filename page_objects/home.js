'use strict';

var searchCommands = {
  submit: function() {
    return this.click('@submitButton').api.pause(1000);
  },
  searchFor: function(searchTerm) {
    return this.waitForElementVisible('.search-bar', 1000).setValue('@searchBar', searchTerm);
  }
};

module.exports = {
  commands: [searchCommands],
  elements: {
    searchBar: { selector: '.search-bar .input--text' },
    submitButton: { selector: '.search-bar .btn--action'}
  }
};
