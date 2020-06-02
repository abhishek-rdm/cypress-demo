/// <reference types="cypress" />


describe("Elesvier About Page",()=>{

    it("Test About Page",function(){

        cy.visit(Cypress.env("url"))
        cy.get(this.poAboutPage.search_button).click();
        cy.get(this.poAboutPage.click_about_us).click();
        cy.get(this.poAboutPage.verify_text).then(function(ele){
            const aboutText=ele.text();
            expect(aboutText).to.equal("We help institutions and professionals advance healthcare, open science and improve performance for the benefit of humanity. Combining content with technology, supported by operational efficiency, we turn information into actionable knowledge. Elsevier empowers knowledge which empowers those who use it.")
        })


     //   cy.get(this.poAboutPage.verify_text).should('have.text',"We help institutions and professionals advance healthcare, open science and improve performance for the benefit of humanity. Combining content with technology, supported by operational efficiency, we turn information into actionable knowledge. Elsevier empowers knowledge which empowers those who use it.")
    })


})