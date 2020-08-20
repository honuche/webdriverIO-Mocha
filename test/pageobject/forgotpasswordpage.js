
class forgotpasswordpage {

        get myEmail () {return $('#email') }
        get forgotPassword () {return $('a[title=\'Recover your forgotten password\']') }
        get retrievepassBtn () {return $('#form_forgotpassword > fieldset > p > button > span') }

    // method creation
    forgotpassword(email) {
        this.myEmail.setValue('hettioged@gmail.com')
        this.forgotPassword.click()
        this.myEmail.setValue('hettioged@gmail.com')
        this.retrievepassBtn.click()
        browser.pause(10000);




    }


}


module.exports = new forgotpasswordpage();

