Feature: The Login Process Validation
 Application regression
@regression

Scenario: Validate Login process with valid email and valid password
Given I visit Storebridger website
When I click The Login button
Then I enter a valid Email Address
Then I enter a valid password
When I Click Login button
Then I validate successful login to my account

Scenario: Validate Login process with an invalid email and valid password
Given I visit Storebridger website
When I click The Login button
Then I enter an invalid Email Address
Then I enter a valid password
When I Click Login button
Then I validate unsuccessful login to my account

Scenario: Validate Login process with an valid email and invalid password
Given I visit Storebridger website
When I click The Login button
Then I enter a valid Email Address
Then I enter an invalid password
When I Click Login button
Then I validate unsuccessful login to my account

Scenario: Validate Login process with an invalid email and invalid password
Given I visit Storebridger website
When I click The Login button
Then I enter an invalid Email Address
Then I enter an invalid password
When I Click Login button
Then I validate unsuccessful login to my account

Scenario: Validate Login process with an empty email and valid password
Given I visit Storebridger website
When I click The Login button
Then I enter an empty Email Address
Then I enter a valid password
When I Click Login button
Then I validate unsuccessful login to my account

Scenario: Validate Login process with a valid email and empty password
Given I visit Storebridger website
When I click The Login button
Then I enter a valid Email Address
Then I enter an empty password
When I Click Login button
Then I validate unsuccessful login to my account

Scenario: Validate Login process with an empty email and invalid password
Given I visit Storebridger website
When I click The Login button
Then I enter an empty Email Address
Then I enter an invalid password
When I Click Login button
Then I validate unsuccessful login to my account

Scenario: Validate Login process with an invalid email and empty password
Given I visit Storebridger website
When I click The Login button
Then I enter an invalid Email Address
Then I enter an empty password
When I Click Login button
Then I validate unsuccessful login to my account

Scenario: Validate Login process with an empty email and empty password
Given I visit Storebridger website
When I click The Login button
Then I enter an empty Email Address
Then I enter an empty password
When I Click Login button
Then I validate unsuccessful login to my account

Scenario: Validate Login process with Google Login
Given I visit Storebridger website
When I click The Login button
When I click The Login with Google button

Scenario: Validate forgot password process 
Given I visit Storebridger website
When I click The Login button
Then I click forgot password link
Then I enter a valid Email Address
When I Click Submit button

Scenario: Validate forgot password process with invalid Email Address
Given I visit Storebridger website
When I click The Login button
Then I click forgot password link
Then I enter an invalid Email Address
When I Click Submit button