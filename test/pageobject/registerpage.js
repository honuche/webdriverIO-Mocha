
    var faker = require('faker');
    const expectChai = require('chai') .expect;
    class registerpage {

    get createEmail()  {return $('#email_create') }
    get createAccountBtn()  {return $('#SubmitCreate > span') }
    get genderBnt1()  {return $('#id_gender1') }
    get genderBnt2() {return $('#id_gender2') }
    get firstName() {return $('#customer_firstname') }
    get lastName()  {return $('#customer_lastname') }
    get myPassword() {return  $('#passwd') }
    get dateOfBirthDay() {return $('#days > option:nth-child(11)') }
    get dateOfBirthMonth() {return $('#months > option:nth-child(5)') }
    get dateOfBirthYear() {return $('#years > option:nth-child(32)') }
    get company() {return $('#company') }
    get address1() {return $('#address1') }
    get city() {return $('#city') }
    get state() {return $('#id_state > option:nth-child(2)') }
    get postcode() {return $('#postcode') }
    get phoneNumber() {return $('#phone_mobile') }
    get registerBtn() {return $('#submitAccount > span') }
    get registerSuccess() {return $('#center_column > p') }

    // method creation
    register(randomEmail, randomfirstName, randomlastName) {
    this.createEmail.setValue(randomEmail);
    this.createAccountBtn.click();
    browser.pause(5000);
    this.genderBnt1.click();
    this.genderBnt2.click();
    this.firstName.setValue(randomfirstName);
    this.lastName.setValue(randomlastName);
    this.myPassword.setValue('upwards');
    this.dateOfBirthDay.click();
    this.dateOfBirthMonth.click();
    this.dateOfBirthYear.click();
    this.company.setValue('inspired');
    this.address1.setValue('inspired');
    this.city.setValue('Atlanta');
    this.state.click();
    this.postcode.setValue('30333');
    this.phoneNumber.setValue('+1404-413-2001');
    this.registerBtn.click();
    browser.pause(5000);
    const expectedMessage = registerSuccess.getText();
    console.log(expectedMessage);
    expectChai('Welcome to your account. Here you can manage all of your personal information and orders.' ,expectedMessage)

    //expect(registerSuccess).toBeDisplayed();



}


}
module.exports = new registerpage();