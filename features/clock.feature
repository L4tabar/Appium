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
