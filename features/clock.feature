Feature: Clock App

  Scenario: 1. Check the presence of the time and click add icon
    Given The Clock app is launched
    When The "Main Page" page is set
    Then The "Action Bar" should be visible
    # And The text of "Date" element should be "Sun, Aug 18"

    When The "Add Button" element is clicked
    And The "Search Page" page is set
    Then The "Search Bar" should be visible
    And The text of "Search Bar" element should be "Search for a city"

  Scenario: 2. Check the Alarm page
    Given The Clock app is launched
    When The "Main Page" page is set
    Then The "Navigation Bar" should be visible
    And The "Alarm" should be visible
    # And The text of "Date" element should be "Sun, Aug 18"

    When The "Alarm in Navigation Bar" element is clicked
    And The "Alarm Page" page is set
    Then The "Page Title" should be visible
    And The text of "Page Title" element should be "Alarm"
