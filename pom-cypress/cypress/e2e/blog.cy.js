import Blog from "../pages/Blog"
 
 const blog = new Blog()
  
 describe("testing blog page", () => {
   beforeEach(() => {
     blog.visit()
   })
  
   it("should visit the blog page", () => {
     cy.title().should("eq", "Blog - Poco theme")
   })
  
   it("should have correct category names", () => {
     blog.getCategoryButton(1).should("contain.text", "Business")
     blog.getCategoryButton(2).should("contain.text", "Electronics")
     blog.getCategoryButton(3).should("contain.text", "Technology")
     blog.getCategoryButton(4).should("contain.text", "Fashion")
   })
 })
 