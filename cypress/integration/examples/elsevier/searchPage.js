/// <reference types="cypress" />


describe("My first test @first",()=>{

    it("Test Search",function(){

        cy.visit(Cypress.env("url"))
        cy.get(this.poSearchPage.select_search).type("covid19")
        cy.get(this.poSearchPage.actual_search).click()
       
    })


})