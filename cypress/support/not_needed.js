// Cypress.Cookies.defaults({
//   whitelist: "access"
// })

// let access_token;

// function is_authenticated(){
//   cy.getCookie('access')
//   cy.getCookie('access').then( access => {
//     cy.log('matttt', access)
//     if (access === null) {
//       cy.request({
//         method: 'POST',
//         url: base + login_endpoint, 
//         body: { "username":"m", "password"" }
//       }).then( response =>  { console.log('more') ; return access_token = response.body.AuthenticationResult.AccessToken }).as('aaa')
//         .then( tokes => cy.setCookie('access', tokes))
//     } else {
//       cy.log('Access token already exists')
//     }
//   })
// }

// Given("I add state", function() {
// cy.getCookie('access')
//  is_authenticated()
// })

// Given("much", function() {
//  cy.log('done')
//  cy.getCookie('access')
// })
