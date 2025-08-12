import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'

const loginPage = new LoginPage()
const dashboardpage = new DashboardPage

describe('Orange HRM Tests', () => {

  //seletores abaixo 

  const selectorsList = {
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb > .oxd-text",

    myInfoButton: ':nth-child(6) > .oxd-main-menu-item',
    FirstNameField: '.orangehrm-firstname',
    LastNameField: ':nth-child(3) > :nth-child(2) > .oxd-input',
    dateField: ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input',
    dateClouseButton: '.--close',
    submitButton: '.orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button',
    genericField: ".oxd-input--active",
    genercicCombobox: '.oxd-select-text--arrow'
  }

  // Login com sucesso
  //    Dado que estou na tela de login
  //    E preencho o campo de e-mail com "Admin"
  //    E preencho o campo de senha com "admin123"
  //    Quando clico no botão "Login"
  //    Então devo ser redirecionado para a página inicial do sistema



  it.only('User Info Update - success', () => {
    loginPage.accessLoginPage()
    loginPage.loginwithUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardpage.checkDashboardPage9




    cy.get(selectorsList.sectionTitleTopBar)

    //Preenchendo Minhas informações


    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.FirstNameField).clear().type('Thiago')
    cy.get(selectorsList.LastNameField).clear().type('Santos')
    cy.get(selectorsList.genericField).eq(4).clear().type('Employee')
    cy.get(selectorsList.genericField).eq(5).clear().type('OtherIdTest')
    cy.get(selectorsList.genericField).eq(6).clear().type('DriveLicensetest')
    //cy.get(selectorsList.genericField).eq(7).clear().type('2025-03-10')
    cy.get(selectorsList.dateClouseButton).click()
    cy.get(selectorsList.genericField).eq(7).clear().type('ssnNunmberTest')
    cy.get(selectorsList.genericField).eq(8).clear().type('sinNumbertest')
    cy.get(selectorsList.submitButton).click({ force: true })

    // Campo de Nacionalidade e Estado civil

    cy.get(selectorsList.genercicCombobox).eq(0).click()
    cy.get(':nth-child(4) > span').click()
    cy.get(selectorsList.genercicCombobox).eq(1).click()
    cy.get('.oxd-select-dropdown > :nth-child(2)').click()




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