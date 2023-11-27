import Home from "../pages/Home"
 
 const home = new Home()
  
 describe("testing home page", () => {
    beforeEach(() => {
      home.visit()
    })
   
    it("should visit home page", () => {
      home.visit()
    })

    it("should go to the wishlist page", () => {
      home.getWishListButton().click();
    })
    
    it("should show the addOns menu options and list modules", () => {
      home.getAddOnsButton().trigger('mouseover');
      home.getModulesAddOnLink().click();
    })
  
    it("should search for a product and buy it", () => {
      home.searchInput("iMac");
      home.getSearchButton().click();
      home.getSearchedProduct().click();
      home.getBuyNowBtn().click();
    })

    
    
 })