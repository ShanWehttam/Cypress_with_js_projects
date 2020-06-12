/* global Given */
// you can have external state, and also require things!
const url = 'Javascript_projects/dom-14-finished/index.html'

const search_string = (tag, text) => cy.contains(tag, text).click()
const confirm_review = () => cy.contains(/[ADD]/).click() 
const cancel_review = () => cy.contains('button', /[Cancel]/).click()

function cleardown() {
  cy.document().then( doc => {
    let list = doc.querySelectorAll('.movie-element')
    cy.log('called')
    if (list.length > 0 ){
      for (let elem of list) {
        elem.parentNode.removeChild(elem)
      }
    }   
  })
}

function assert_string(tag, text) { 
  cy.contains(tag, text).should('exist')
  cleardown()
}

function add_movie(movie) {
  cy.contains("ADD MOVIE").click()
  cy.get("#title").type(movie)
  cy.get("#image-url").type("none")
  cy.get("#rating").type("5")
}

Given('I am on the {string} page', (page_title) =>  cy.visit(url) )
When('I enter all the required information about a film', () => add_movie("Titanic") )
When('I confirm to add the review', () => confirm_review() )
Then('I see the film displayed on the page', (text) => assert_string('h2', 'Titanic') )

When('I choose to cancel my review', () => cancel_review() )
Then('the film is not visible on the page', (text) => {
 cy.document().then( doc => cy.wrap(document.body.outerText).should('not.include', 'Titanic')  )
 cy.log(Object.getOwnPropertyNames(Document.prototype))
});

When('I have posted a review of a film', () => {
  add_movie("Titanic")
  confirm_review()
});

When('I delete the film', () => {
  cy.contains("Titanic").click()
  cy.contains("Yes").click()
});

When('I choose not to confirm the deletion', () => {
  cy.contains("No").click()
});

When('at first i want to delete the film', () => {
  cy.contains("Titanic").click()
});

Then('the film is still showing on the page', (text) => { 
  assert_string('h2', 'Titanic')
})

When('I do not enter a film name', () => {
  cy.get("#title").clear()
});

Then('I see an error message', (text) => { 
  cy.on('window:alert', (alert) => console.log(alert)) //.should('have.text','Please enter valid values (rating between 1 and 5).') )
  // expect(alert).to.equal(`Please enter valid values (rating between 1 and 5).`)
  //assert_string('h2', 'Titanic')
  cy.get("#title").type('gdgdgdgdg')
})

When('I do not enter a film rating', () => {
  cy.get("#rating").clear()
});