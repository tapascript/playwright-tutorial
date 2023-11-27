// cypress/pages/Blog.js
class Blog {
  constructor() {
    this.url = "/index.php?route=extension/maza/blog/home"
    this.title = "Blog"
  }
  visit() {
    cy.visit(this.url)
  }
 
  getCategoryButton(index) {
    return cy.get(`#entry_210963 > div > a:nth-child(${index})`)
  }
  
 
  getPreviousBlogsButton() {
    return cy.get(
      "#mz-article-listing-76210960 > div.mz-tab-listing-header.d-flex > div > div > a.mz-swiper-nav-prev.swiper-button-disabled"
    )
  }
 
  getNextBlogsButton() {
    return cy.get(
      "#mz-article-listing-76210960 > div.mz-tab-listing-header.d-flex > div > div > a.mz-swiper-nav-next"
    )
  }
}
 
module.exports = Blog