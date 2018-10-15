Feature: MegaProject

    As a client is able create an account on Mega and hotmail

    Scenario: A client must be able to create an account on Mega and hotmail
        Given a client creates a new Mega account
        When a client create an account
        When a client verifies email account
        When a client is on Mega's profile page