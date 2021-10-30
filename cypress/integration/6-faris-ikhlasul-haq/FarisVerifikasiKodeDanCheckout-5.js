//Nama          : Faris Ikhlasul Haq
//No Absen/NIM  : 07/1941720062
//Kelas         : TI-3A
//Test Case     : Verify Checkout Payment (Valid Firstname, Lastname,Zip, Cart)
//Akun          : standart_user
/// <reference types="cypress"/>

describe('Verify Checkout All Valid', () => {
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
            .type('Ikhlasul')
        cy.get('#postal-code.input_error.form_input')
            .type('65152')
        cy.contains('Continue').click()
    })
})