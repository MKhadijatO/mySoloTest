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

Given("I visit Storebridger website", function () {
  cy.visit("https://dev.storebridger.com/");
});

When("I click The Signup button", function () {
  cy.get(".sc-e96eb534-0.sc-acdd15b4-6.bDHVSY.frYorX")
    .scrollIntoView()
    .invoke("removeAttr", "target")
    .click();
});

Then("I enter a valid Email Address", function () {
  // cy.get("#email").type(this.data.email);
});

Then("I check the validation checkbox for TC and PP", function () {
  cy.get("input[type='checkbox']").check();
});

Then("I Click Signup", function () {
  cy.get(".sc-egiyK.sc-bqiRlB.dfoHCV.hMAqdB").click();
});


//Sign up with invalid email
Then("I enter an invalid Email Address", function () {
  cy.get("#email").type(this.data.iemail);
});


//Sign up with google
Then("I select signup with google", function () {
  cy.get(".sc-egiyK.sc-bkkeKt.dfoHCV.igVrnb").click();
});

When("I select a google email address", function () {
  //   cy.get().select();
});


//Signup with google with a non google email
When("I select a non-google email address", function () {
  //   cy.get().select();
});


//Validates the Get Started Button
When("I click The Get Started button", function () {
  cy.get("a[class='sc-e96eb534-0 sc-fd58a756-3 bDHVSY']", { timeout: 3000 })
    .contains("Get Started")
    .invoke("removeAttr", "target")
    .click();
});

Then("I select the Sign Up link", function () {
  cy.get("a[class='sc-jRQBWg PfAWK']").contains("Sign Up").click();
});


//Verifying the TC and PP page loads
Then("I click the TC link", function () {
  cy.get("", { timeout: 3000 }).invoke("removeAttr", "target").click();

  //checks for an element on the page

});

Then("I click the PP link", function () {
  cy.get("", { timeout: 3000 })
    .invoke("removeAttr", "target")
    .click({ force: true });

  //checks for an element on the page

});


//Validate the "Join the Storebridger"
Then ("I click the Join the Storebridger button", function (){
  cy.get("a[href="/"]").click();
})