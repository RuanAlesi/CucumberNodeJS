Feature: Web UI Testing

    Feature for learning Web UI tests

    Scenario: Finding some cheese
        Given I am on the Google search page
        When I search for "Cheese!"
        Then the page title should start with "Cheese!"