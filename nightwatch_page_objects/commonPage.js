var commands = {
  enterShipping: function () {
    this.setValue('@firstName', 'Herman');
    this.setValue('@lastName', 'Zeelsvors');
    this.setValue('@shipToAddress', 'Meikade');
    this.setValue('@houseNumber', '12');
    this.setValue('@shipToPostalCode', '1234');
    this.setValue('@shipToCity', 'Lokeren');
    this.setValue('@phoneNumber', '012345678');
    this.setValue('@emailAddress', 'payment@tester.be');
    this.click('@ageCheck');
  }
}

module.exports = {
  url: function () { return this.client.launchUrl; },
  commands: [commands],
  elements: {
    basketPage: '.basket',
    title: 'h1',
    searchBar: '.search-bar .input--text',
    searchButtonElement: '.search-bar .btn--action',
    products: '.tile',
    productPage: '.product-image',
    firstProduct: '.tile .tile__title',
    shoppingBasketButtonElement: '.product-details__addtocart button.btn.btn--action',
    firstBasketItemDescription: '.basket__title a',
    checkOutButton: '.btn-checkout',

    firstName: '[ng-model="checkoutCtrl.shipTo.name.firstName"]',
    lastName: '[ng-model="checkoutCtrl.shipTo.name.lastName"]',
    shipToAddress: '[ng-model="checkoutCtrl.shipTo.shippingAddress.street"]',
    houseNumber: '[ng-model="checkoutCtrl.shipTo.shippingAddress.number"]',
    houseNumberExtension: '[ng-model="checkoutCtrl.shipTo.shippingAddress.addition"]',
    shipToPostalCode: '[ng-model="checkoutCtrl.shipTo.shippingAddress.postalCode"]',
    shipToCity: '[ng-model="checkoutCtrl.shipTo.shippingAddress.city"]',
    phoneNumber: '[ng-model="checkoutCtrl.shipTo.phoneNumber.number"]',
    emailAddress: '[ng-model="checkoutCtrl.shipTo.email.address"]',
    ageCheck: '.legal-check > label'
  }
}
