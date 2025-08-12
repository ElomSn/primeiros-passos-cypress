class LoginPage {

    selectorsList() {
        const selectors = {
            usernameField: "[name='username']",
            passowordFild: "[name='password']",
            loginButton: "[type='submit",
            wrongCredentialAlert: "[role='alert']",

        }

        return selectors
    }

    accessLoginPage() {

        cy.visit('/auth/login')

    }

    loginwithUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passowordFild).type(password)
        cy.get(this.selectorsList().loginButton).click()

    }


}

export default LoginPage