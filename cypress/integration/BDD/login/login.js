/// <reference types="Cypress" />​
/// <reference types="cypress-iframe" />​
import "cypress-iframe";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

beforeEach(function () {
  cy.fixture("example").then(function (data) {
    this.data = data;
  });

  cy.on("fail", (error, runnable) => {
    if (error.message.includes("GET 400")) {
      // Handle specific error
      return false; // Prevent Cypress from failing the test
    }
  });
});


//Validates Login with valid credentials
Given("I visit Storebridger website", function () {
  cy.visit("https://dev.storebridger.com/");
});

When("I click The Login button", function () {
  //   cy.wait(6000);
  cy.get(".sc-e96eb534-0.sc-acdd15b4-5.bDHVSY.fEVWRk", { timeout: 30000 })
    .invoke("removeAttr", "target")
    .click();
});

Then("I enter a valid Email Address", function () {
  cy.get("#email", { timeout: 30000 }).type(this.data.email);
});

Then("I enter a valid password", function () {
  cy.get("#password").type(this.data.password);
});

When("I Click Login button", function () {
  cy.get(".fSiodB > .sc-egiyK").click();
});

Then("I validate successful login to my account", function () {
  cy.get("button[type='button']", { timeout: 30000 }).should(
    "contain",
    "Khadijat"
  );
  // cy.get("button[type='button']").should('exist', { timeout: 3000 })
});


//Validates Login with invalid credentials
Then("I enter an invalid Email Address", function () {
  cy.get("#email").type(this.data.iemail);
});

Then("I validate unsuccessful login to my account", function () {

});

Then("I enter an invalid password", function () {
  cy.get("#password").type(this.data.ipassword);
});

Then("I enter an empty Email Address", function () {
  cy.get("#email").should("be.empty");
  // .should('have.value', '');
  // cy.get("#email").type("");
});

Then("I enter an empty password", function () {
  cy.get("#password").should("be.empty");
  // .should('have.value', '');
  // cy.get("#password").type("");
});

When("I click The Login with Google button", function () {
  cy.get('.sc-egiyK.sc-bkkeKt.dfoHCV.igVrnb', { timeout: 30000 })
  .invoke("removeAttr", "target")
  .click();
});

Then("I click forgot password link", function () {
  cy.get('.sc-gsDKAQ > .sc-jRQBWg').click();
});

When("I Click Submit button", function () {
  cy.get('.sc-egiyK.sc-bqiRlB.dfoHCV.hMAqdB').click();
});
