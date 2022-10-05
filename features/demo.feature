Feature: Featurename
    @Demo-get-data
    Scenario: Demo get data
        Given Login page
        When Input "<username>" and "<password>"
        Then Login successull
        Example:
        |username|password|
        ||
