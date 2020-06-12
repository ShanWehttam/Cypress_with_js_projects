Feature: Post a review

As a movie reviewer
I like to submit film reviews
So that i can keep track of films i've seen

Scenario: Review a film
  Given I am on the "Favorite Movies" page
  And I enter all the required information about a film
  When I confirm to add the review
  Then I see the film displayed on the page

Scenario: Cancel my film Review
  Given I am on the "Favorite Movies" page
  And I enter all the required information about a film
  When I choose to cancel my review
  Then the film is not visible on the page

Scenario: Delete a film Review
  Given I am on the "Favorite Movies" page
  And I have posted a review of a film
  When I delete the film
  Then the film is not visible on the page

Scenario: Cancelling the Deletion of a film review
  Given I am on the "Favorite Movies" page
  And I have posted a review of a film
  When at first i want to delete the film
  But I choose not to confirm the deletion
  Then the film is still showing on the page

Scenario: Not entering a film name as part of the film review
  Given I am on the "Favorite Movies" page
  And I enter all the required information about a film
  But I do not enter a film name
  When I confirm to add the review
  Then I see an error message

Scenario: reviewing a film without including a rating
  Given I am on the "Favorite Movies" page
  And I enter all the required information about a film
  But I do not enter a film rating
  When I confirm to add the review
  Then I see an error message

@unit
Scenario: Incrementing the counter
  Given I am on the "Favorite Movies" page
  And I enter all the required information about a film
  When I increase the counter
  Then nothing

@unit
Scenario Outline: Entering film ratings within the required range
https://testingjavascript.com/ this links to any unit test repo, to prove that devs are unit testing
  Given I am on the "Favorite Movies" page
  And I enter all the required information about a film
  When I enter a film <rating>
  Then I see a <result> error message

Examples:
The film rating must be between 1 and 5
 | rating | result    |
 | 0      | error     |
 | 6      | error     |
 | 5      | no error  |
 | 1      | no error  |