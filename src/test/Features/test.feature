Feature: Chrome Installed
  Scenario: Chrome Installation
    Given I am a chrome user
    When I access Argos url
    Then  I see Argos homepage
  @One
  Scenario: Chrome Installation1
    Given I am a chrome user
    When I access Amazon url
    Then I see Amazon homepage
  @One
  Scenario: Chrome Installation2
    Given I am a chrome user
    When I access Hsbc url
    Then I see Hsbc homepage

#  Scenario: Chrome Installation
#    Given I am a chrome user
#    When I access google url
#    Then I see Google home page



#Feature: Chrome Installed
#  Scenario: Chrome Installation
#    Given I am a chrome user
#    When I access Argos url
#    Then  I see Argos homepage


  Scenario: Chrome Installation2
    Given I am a chrome user
    When I access Hsbc url
    Then I see Hsbc homepage
