Feature: Chrome Installed
  Scenario: Chrome Installation
    Given I am a chrome user
    When I access Tesco url
    Then I see Tesco home page