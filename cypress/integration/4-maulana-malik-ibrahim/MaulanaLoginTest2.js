//Nama          : Maulana Malik Ibrahim
//No Absen/NIM  : 12/1941720055
//Kelas         : TI-3A
//Test Case     : Login
//Akun          : standard_User

it.only('Saucedemo test', function(){
    cy.visit('https://www.saucedemo.com/')
       
    cy.get('#user-name.input_error.form_input')
    .type('standard_user') //correct username

    
    cy.get('#password.input_error.form_input')
    .type('secret_sauce22') //Change to invalid password


    cy.get('#login-button.submit-button.btn_action')
    .click()
})