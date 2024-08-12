Feature: The Signup Process Validation
 Application regression
@regression

Scenario: Validate Signup process with valid email
Given I visit Storebridger website
When I click The Signup button
Then I enter a valid Email Address
Then I check the validation checkbox for TC and PP
Then I Click Signup

Scenario: Validate Signup process with valid email without checking TC and PP
Given I visit Storebridger website
When I click The Signup button
Then I enter a valid Email Address
Then I Click Signup

Scenario: Validate Signup process with with empty email field
Given I visit Storebridger website
When I click The Signup button
Then I check the validation checkbox for TC and PP
Then I Click Signup

Scenario: Validate Signup process with with empty email field and without checking TC and PP
Given I visit Storebridger website
When I click The Signup button
Then I Click Signup

Scenario: Validate Signup process with invalid email
Given I visit Storebridger website
When I click The Signup button
Then I enter an invalid Email Address
Then I check the validation checkbox for TC and PP
Then I Click Signup

Scenario: Validate Signup process with invalid email without checking TC and PP 
Given I visit Storebridger website
When I click The Signup button
Then I enter an invalid Email Address
Then I Click Signup

Scenario: Validate Signup process with "Sign up with google"
Given I visit Storebridger website
When I click The Signup button
Then I select signup with google
When I select a google email address 

Scenario: Validate Signup process with "Sign up with google" with non-google account
Given I visit Storebridger website 
When I click The Signup button
Then I select signup with google
When I select a non-google email address 

Scenario: Validate Signup process Using the Get Started button
Given I visit Storebridger website
When I click The Get Started button
Then I select the Sign Up link
When I enter a valid Email Address
Then I check the validation checkbox for TC and PP
Then I Click Sign up button

Scenario: Validate the TC link opens
Given I visit Storebridger website
When I click The Signup button
Then I click the TC link

Scenario: Validate the PP link opens
Given I visit Storebridger website
When I click The Signup button
Then I click the PP link

Scenario: Validate the "Join the Storebridger" button
Given I visit Storebridger website
Then I click the Join the Storebridger button