module.exports = {
  url: function () { return this.client.launchUrl; },
  elements: {
    basketPage: '.basket',
    title: 'h1',
    searchBar: '.search-bar .input--text',
    searchButtonElement: '.search-bar .btn--action',
    products: '.tile',
    productPage: '.product-image',
    firstProduct: '.tile .tile__title',
    shoppingBasketButtonElement: '.product-details__addtocart button.btn.btn--action'
  }
}
