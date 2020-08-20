
describe('forgot password', () => {
    it('check that user can reset password successfully', () => {
        browser.url('/index.php');
        //Locator Identifiers
        const signIn = $('#header > div.nav > div > div > nav > div.header_user_info > a');
        const myEmail = $('#email');
        const forgotPassword = $('#login_form > div > p.lost_password.form-group > a');
        const retrievepassBtn = $('#form_forgotpassword > fieldset > p > button > span');

        signIn.click();
        browser.pause(3000);
        myEmail.setValue('hettioged@gmail.com');
        browser.pause(3000);
        forgotPassword.click();
        browser.pause(3000);
        myEmail.setValue('hettioged@gmail.com');
        retrievepassBtn.click();
        browser.pause(10000);
    })

})