var faker = require('faker');
const expectChai = require('chai') .expect;
describe('register', () => {

    var randomFirstName = faker.name.firstName(); // Rowan
    var randomLastName = faker.name.lastName(); // Luke
    var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

    it('check that user can register successfully', () => {
        browser.url('/index.php');

        //Locator Identifiers
        const signIn = $('#header > div.nav > div > div > nav > div.header_user_info > a');
        const createEmail = $('#email_create');
        const createAccountBtn = $('#SubmitCreate > span')
        const genderBnt1 = $('#id_gender1');
        const genderBnt2 = $('#id_gender2');
        const firstName = $('#customer_firstname');
        const lastName = $('#customer_lastname');
        const myPassword = $('#passwd');
        const dateOfBirthDay = $('#days > option:nth-child(11)');
        const dateOfBirthMonth = $('#months > option:nth-child(5)');
        const dateOfBirthYear = $('#years > option:nth-child(32)');
        const company = $('#company');
        const address1= $('#address1');
        const city= $('#city');
        const state = $('#id_state > option:nth-child(2)');
        const postcode = $('#postcode');
        const phoneNumber = $('#phone_mobile');
        const registerBtn = $('#submitAccount > span');
        const registerSuccess = $('#center_column > p') ;

        signIn.click();
        createEmail.waitForDisplayed(3000);
        createEmail.setValue(randomEmail);
        createAccountBtn.click();
        genderBnt1.click();
        genderBnt2.click();
        firstName.setValue(randomFirstName);
        lastName.setValue(randomLastName);
        myPassword.setValue('upwards');
        dateOfBirthDay.click();
        dateOfBirthMonth.click();
        dateOfBirthYear.click();
        company.setValue('inspired');
        address1.setValue('inspired');
        city.setValue('Atlanta');
        state.click();
        postcode.setValue('30301');
        phoneNumber.setValue('+1404-413-2001');
        registerBtn.click();
        browser.pause(10000);
        const expectedMessage = registerSuccess.getText();
        console.log(expectedMessage);
        expectChai('Welcome to your account. Here you can manage all of your personal information and orders.' ,expectedMessage)

        //expect(registerSuccess).toBeDisplayed();










































    })

})


