#Feature: verifying login
#
#  Scenario: verifying with login valid password
#    Given user is on facebook login page
#    When user enters a valid login
#    And user enter valid password
#    Then user should able to login
#
#
#  Scenario: verifying with invalid login and password
#    Given user is on facebook login page
#    When user enters a invalid login
#    And user enter invalid password
#    Then user should not able to login
#
#
#  Scenario: verifying with valid login and invalid password
#    Given user is on facebook login page
#    When user enters valid login
#    And invalid password
#    Then user should not able to login
#
#
#  Scenario: verifying with invalid login and valid password
#    Given user is on facebook login page
#    When user enters invalid login
#    And valid password
#    Then user should not able to login
#
#  Scenario: verifying without login and password
#    Given user is on facebook login page
#    When user gives empty login and password field
#    And user click on submit button
#    Then user should not able to login