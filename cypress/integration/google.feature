Feature: homepage

  Scenario: get dynamic language definition
    Given I am on the Google homepage
    When I search for "dynamic"
    Then I see "executed at runtime" as part of the definition

  Scenario: navigate back to homepage
    Given I am viewing the definition of "dynamic" languages
    When I navigate back to the homepage
    Then I see the homepage

  Scenario: close Modal
    Given I am on the other homepage
    When I search for "dynamic"
    Then I can close the modal