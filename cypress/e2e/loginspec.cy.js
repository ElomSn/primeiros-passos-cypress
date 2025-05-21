describe('Orange HRM Tests', () => {

  const selectorslist = {

    usernameField: "[name='username']"
  }





  it('Login - success', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorslist.usernameField).type('Admin')
    cy.get("[name='password']").type('admin123')
    cy.get('.oxd-button').click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboar')
  })

  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Test')
    cy.get("[name='password']").type('Test')
    cy.get("[type='submit").click()
    cy.get("[role='alert'")

  })

})