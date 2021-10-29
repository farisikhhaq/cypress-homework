//Nama          : Hisyam Haryo Mahdyan
//No Absen/NIM  : 10/1941720186
//Kelas         : TI-3A
//Test Case     : Sorting Pada Harga dan Abjad (A->Z)
//Akun          : problem_User

it.only('Saucedemo test', function(){
    cy.visit('https://www.saucedemo.com/')   
    cy.get('#user-name.input_error.form_input').type('problem_user')
    cy.get('#password.input_error.form_input').type('secret_sauce')
    cy.get('#login-button.submit-button.btn_action').click()
    cy.get('.product_sort_container ').select('lohi').should('have.value', 'lohi')
})