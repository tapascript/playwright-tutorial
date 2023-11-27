import Blog from "../pages/Blog"
 
 const blog = new Blog();

 const categories = ["Business", "Electronics", "Technology", "Fashion"];
  
 describe("testing blog page", () => {
   beforeEach(() => {
     blog.visit()
   })
  
   it("should visit the blog page", () => {
     cy.title().should("eq", "Blog - Poco theme")
   })
  
   it("should have correct category names", () => {
    categories.forEach((categoryName, index) => {
      blog.getCategoryButton(index+1).should("contain.text", categoryName) 
    });
   })
 })
 