Feature: Clock App

  Scenario: 1. Check the presence of the time and click add icon
    Given I launch the clock app
    Then I should see the current time

    When The add button is clicked
    Then The search should be visible
