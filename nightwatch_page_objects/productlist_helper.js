var productlistCommands = {
  changePriceFiltering: function() {
    return this.api
      .moveToElement('.rzslider span.pointer', 0, 0)
      .mouseButtonDown()
      .moveToElement('.rzslider span.pointer', 80, 0)
      .mouseButtonUp();
  }
};

module.exports = {
  commands: [productlistCommands],
  elements: {
    firstProduct: { selector: '.tile:nth-child(1)' },
    firstProductTitle: { selector: '.tile:nth-child(1) div.tile__title' },
    priceSliderButtonLeft: { selector:  '.rzslider span.pointer:nth-child(1)' }
  }
}
