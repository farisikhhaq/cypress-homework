//Nama          : Faris Ikhlasul Haq
//No Absen/NIM  : 07/1941720062
//Kelas         : TI-3A
//Test Case     : Verify Zip Postal Code (Valid Firstname & Lastname , Invalid Zip)
//Akun          : standart_user

/// <reference types="cypress"/>

describe('Insert Name with Words and Invalid Zip with Symbols', () => {
    it('visit web saucedemo', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name.input_error.form_input')
            .type('standard_user')
        cy.get('#password.input_error.form_input')
            .type('secret_sauce')
        cy.contains('Login').click()
        cy.get('#add-to-cart-sauce-labs-backpack.btn.btn_primary.btn_small.btn_inventory').click()
        cy.get('.shopping_cart_link').click()
        cy.contains('Checkout').click()
        cy.get('#first-name.input_error.form_input')
            .type('Faris')
        cy.get('#last-name.input_error.form_input')
            .type('Ikhlasul H')
        cy.get('#postal-code.input_error.form_input')
            .type('@%#^$*#')
        cy.contains('Continue').click()
    })
})