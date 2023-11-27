class Home {

  constructor() {
    this.url = "/";
    this.title = "Home"
  }

  visit() {
    cy.visit(this.url)
  }
 
  searchInput(text) {
    return cy.get('input[name="search"]').first().type(text)
  }
 
  getSearchButton() {
    return cy.get("#entry_217822 > div > form > #search > div.search-button > button").first()
  }
 
  getWishListButton() {
    return cy.get("#entry_217824 > a");
  }
 
  getAddOnsButton() {
    return cy.get(
      "#widget-navbar-217834 > ul > li:nth-child(5) > a > div > span"
    )
  }

  getModulesAddOnLink() {
    return cy.get(
      "#widget-navbar-217834 > ul > li:nth-child(5) > ul > li:nth-child(1) > a"
    )
  }
  
}

module.exports = Home;