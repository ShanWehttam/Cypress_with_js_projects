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
















// let key;
// //let session = (token) => { return key = token || false}

// /*
// function has_telemetry_data() {
//   cy.request({
//     method: 'POST',
//     url: base + login_endpoint, 
//     body: { "username":"matthew.nash@paconsulting.com", "password":"Itsnotthepass1" } 
//   }).then( response => {
//     expect(response.status).to.equal(200)
//     access_token = response.body.AuthenticationResult.AccessToken
//     return access_token
//     //dont put any cypress commands in here otherwise cypress will complain that i'm mixing sync with async
//   }).then( token => has_data(token))
//     .then( token => { key = token ; get_telems(token) } )
//     .then( token => cy.log(key, '&&&&&&&&&&') )
// }
// */
// /*
// function has_telemetry_data() {
//   return new Promise(function(resolve,reject){
//     cy.request({
//       method: 'POST',
//       url: base + login_endpoint, 
//       body: { "username":"matthew.nash@paconsulting.com", "password":"Itsnotthepass1" } 
//     }).then( response => {
//       expect(response.status).to.equal(200)
//       access_token = response.body.AuthenticationResult.AccessToken
//       return access_token
//       //dont put any cypress commands in here otherwise cypress will complain that i'm mixing sync with async
//     })
//     resolve(access_token)
//   })
// }

// */

// /*
// let access_token;
// let signin = false

// function has_telemetry_data() {
//   if (signin === false ) {
//   signin = signin || true
//   console.log('tim')
//     cy.request({
//       method: 'POST',
//       url: base + login_endpoint, 
//       body: { "username":"matthew.nash@paconsulting.com", "password":"Itsnotthepass1" } 
//     }).then( response =>  { console.log('clive') ; return access_token = response.body.AuthenticationResult.AccessToken }).as('aaa')
//       .then( token => { return cy.request({ method: 'GET', url: devices, headers: { Authorization:`Bearer ${access_token}`} }  ).as('something') } )
//       .then( respo => { return respo.body.devices } ).as('devices')
//   } else {
//     cy.log('keep going')
//   }

// }


// //{return response.body.AuthenticationResult.AccessToken}


//     cy.request({
//       method: 'GET',
//       url: cs_metric,
//       headers: { Authorization:`Bearer ${token}`}
//     }).then( response => {
//         expect(response.body).to.have.property('results')
//     })



// */

// /*
// function login() {
//  //   cy.log(!login_status.attempt === true)
//   if (!is_logged.cache === true) {
//     cy.log('hello')
//    // login_status.status = true
//     cy.visit('http://307059552679-frontend-dashboard.s3-website-ap-northeast-1.amazonaws.com/login', {failOnStatusCode: false})
//     cy.log(Cypress.Cookies.debug(true, {verbose: false})) // is this doing anything??
//     cy.server()
//     */
//    cy.route('**/dev/devices').as('devices')
//    /*
//     cy.wait('@devices')
//     cy.getCookies().as('cookies')
//     cy.get('@cookies').then( cookies => is_logged(cookies[0].name) )
//                       .then( cookies => console.log(is_logged.cache) )
//                       .then( cookies => console.log(is_logged() ) )
//                       .then( cookies => console.log(is_logged() ) )
//    // console.log('dave')
//    cy.get(':nth-child(5) > .DeviceTile_deviceTile__1_csw > h2').click()
// } else {
  
//     // { expect.cookies[0].name === 'access' ; if (cookies[0].name) is_logged(true) }
//   }
// }

// let login_status = {
//   attempt: false,
//   status() {
//     cy.get('@cookies').then(cookies=> expect.cookies[0].name === access)
//   }
// }

// function logout() {
//     if (!login_status === false ){
//       cy.visit('http://307059552679-frontend-dashboard.s3-website-ap-northeast-1.amazonaws.com/logout', {failOnStatusCode: false}) 
//       cy.clearLocalStorage()
//       } else {
//     }
// }

// export { has_telemetry_data, login, get_telems, login_status, key}  
// */

// Given("much", function() {
//  cy.log('done')
//  cy.getCookie('access')
// })
