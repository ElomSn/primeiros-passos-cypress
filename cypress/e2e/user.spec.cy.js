import userData from '../fixtures/user-data.json'

describe('Orange HRM Tests', () => {

  //seletores abaixo 

  const selectorsList = {

    usernameField: "[name='username']",
    passowordFild: "[name='password']",
    loginButton: "[type='submit",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb > .oxd-text",
    dashboardGrid: "orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: ':nth-child(6) > .oxd-main-menu-item',
    FirstNameField: '.orangehrm-firstname',
    LastNameField: ':nth-child(3) > :nth-child(2) > .oxd-input',
    IdFuncionario: ':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
    OutraIdentificação: ':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
    DriveLicenseNumber: ':nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
    dateField: ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input',
    dateClouseButton: '.--close',
    submitButton: '.orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button'
  }

  // Login com sucesso
  //    Dado que estou na tela de login
  //    E preencho o campo de e-mail com "Admin"
  //    E preencho o campo de senha com "admin123"
  //    Quando clico no botão "Login"
  //    Então devo ser redirecionado para a página inicial do sistema



  it.only('User Info Update - success', () => {

    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passowordFild).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.sectionTitleTopBar)

    //Preenchendo Minhas informações


    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.FirstNameField).clear().type('Thiago')
    cy.get(selectorsList.LastNameField).clear().type('Santos')
    cy.get(selectorsList.IdFuncionario).clear().type(232)
    cy.get(selectorsList.OutraIdentificação).clear().type(321)
    cy.get(selectorsList.DriveLicenseNumber).clear().type(564)
    cy.get(selectorsList.dateField).clear().type('2025 - 03 - 10')
    cy.get(selectorsList.dateClouseButton).click()
    cy.get(selectorsList.submitButton).click()

  })

  // Login Fail
  //  Dado que estou na tela de login
  //  E preencho o campo de e-mail de forma sem o "@"
  //  E preencho o campo de senha deixando em Branco
  //  Quando clico no Botão "Login"
  //  Então devo ver uma mensagem de erro "E-mail ou senha inválidos"

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passowordFild).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)

  })

})