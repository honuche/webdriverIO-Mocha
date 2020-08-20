


const homepage = require('..\\pageobject\\homepage')
const loginpage = require('..\\pageobject\\loginpage')

describe('loginTest', () => {
it('check that user can login with success', () => {

        browser.url('/index.php');
        browser.maximizeWindow();
        expect(browser).toHaveTitle('My Store');
        homepage.signIn();

        loginpage.login('hettioged@gmail.com','12May75');
       browser.pause(5000);
    })

})


