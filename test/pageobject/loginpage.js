const expectChai = require('chai') .expect;

class loginpage {
    // Locator Identifiers

    get myEmail () {return $('#email') }
    get myPassword () {return $('#passwd') }
    get signInBtn () {return $('#SubmitLogin > span') }
    get welcomeMessage () {return $('div#center_column > .info-account') }
   // get signOut ()  {return $('#header > div.nav > div > div > nav > div:nth-child(2) > a') }

   // method creation
    login (email, password) {
        this.myEmail.setValue(email)
        this.myPassword.setValue(password)
        this.signInBtn.click();
     const message=   this.welcomeMessage.getText();
     console.log(message);
     expectChai('Welcome to your account. Here you can manage all of your personal information and orders.', message);

    }


}

module.exports = new loginpage();