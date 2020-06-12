/* global Given */
// you can have external state, and also require things!
const url = 'Javascript_projects/getting-started-01-first-app/index.html'
const url2 = 'Javascript_projects/getting-started-02-first-app-done/index.html'

const search_string = (text) => cy.contains(text).click()
const assert_string = (text) => cy.contains(text).should('exist')

const view_definition = (subject) => {
  cy.visit(url)
  search_string(subject)
}

Given('I am on the Google homepage', () => {
  cy.visit(url)
})

When('I search for {string}', (text) => {
  search_string(text)
});

Then('I see {string} as part of the definition', (text) => {
  assert_string(text)
});


Given('I am viewing the definition of {string} languages', (text) => {
  view_definition(text)
})

When('I navigate back to the homepage', () => {
  cy.go('back')
});

Then('I see the homepage', (text) => {
  cy.title().should('equal', 'JavaScript (Very) Basics')
});

Given('I am on the other homepage', () => {
  cy.visit(url2)
})

Then('I can close the modal', () => {
  //cy.focus()//.type('{return}')
  //cy.get('.modal > p').should('contain', 'instead evaluated')
  // focus
  //cy.get('button').focus().trigger('keydown', { keyCode: 'enter' })
  //cy.get('button').focus().trigger('click')
  cy.get('button').focus().trigger('keydown')
  cy.get('button').contains('Okay').focus().type('{enter}')
  //cy.get('button').contains('Okay').click()

});
