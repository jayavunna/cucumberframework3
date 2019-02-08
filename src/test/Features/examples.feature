@Two
Feature: Multi Bank
  Scenario Outline: Open Multi Windows
    Given I am a chrome user
    When I access "<BankWebsite>" Website
    Then I can see "<BankName>" homePage
    Examples:
    |BankWebsite|BankName|
    |https://www.santander.com/|Santander|
    |https://www.barclays.co.uk/ |Barclays|
    |https://www.lloydsbank.com/|Lloyds|
    |https://www.sbiuk.com/     |State Bank of India|