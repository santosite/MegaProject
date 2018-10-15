import megaPage from '../page_objects/mega.page';
import hotPage from '../page_objects/outlook.page';
import profilePage from '../page_objects/megaProfile.page';

module.exports =  function() {
    this.Given(/^a client creates a new Mega account$/, function () {
        // Write code here that turns the phrase above into concrete actions
        megaPage.openMega(true);
        browser.pause(5000)
      });
    this.When(/^a client create an account$/, function () {
        megaPage.click('//*[@id="startholder"]/div[3]/div[1]/div/div[14]/a[1]');
        browser.pause(1000)
        megaPage.click('//*[@id="register-firstname-registerpage2"]');
        megaPage.name.setValue('Prueba');
        megaPage.click('//*[@id="register-lastname-registerpage2"]');
        megaPage.lastName.setValue('Mega');
        megaPage.click('//*[@id="register-email-registerpage2"]');
        megaPage.email.setValue('mgaproject123@outlook.com')
        megaPage.click('//*[@id="register-password-registerpage2"]')
        megaPage.psswd.setValue('Prueba123')
        megaPage.click('//*[@id="register-password-registerpage3"]')
        megaPage.repsswd.setValue('Prueba123');
        megaPage.click('//*[@id="register-check-registerpage2"]');
        megaPage.click('//*[@id="register_form"]/div[7]')
        browser.pause(2000)
    });
    this.When(/^a client verifies email account$/, function () {
        // Write code here that turns the phrase above into concrete actions
        hotPage.openHot(true);
        browser.pause(5000);
        hotPage.click('//*[@id="i0116"]');
        hotPage.email.setValue('mgaproject123@outlook.com')
        hotPage.click('//*[@id="idSIButton9"]');
        browser.pause(500)
        hotPage.click('//*[@id="i0118"]');
        browser.pause(1000);
        hotPage.psswd.setValue('Prueba123');
        browser.pause(500)
        hotPage.click('//*[@id="idSIButton9"]');
        browser.pause(500);
        hotPage.click('//*[@id="app"]/div/div[2]/div[1]/div[1]/div[3]/div[2]/div/div[1]/div[1]/div/div[2]/div/div[2]');
        browser.pause(500);
        hotPage.click('//*[@id="app"]/div/div[2]/div[1]/div[1]/div[3]/div[2]/div/div[1]/div[2]/div/div/div/div/div/div[2]/div/div/div');
        browser.pause(500);
        hotPage.click('//*[@id="x_bottom-button"]');        
      });
    this.When(/^a client is on Mega's profile page$/, function () {
        // Write code here that turns the phrase above into concrete actions
        browser.pause(5000);
        profilePage.openDas(true);
        profilePage.switchTab();
        browser.saveScreenshot('../../snapshot.png');
        //profilePage.click('//*[@id="fmholder"]/div[4]/div[2]/div[1]/div[3]')
        browser.url('https://mega.nz/fm/q3oxTara');
        browser.pause(2000)
        profilePage.click('//*[@id="topmenu"]/div[1]/div/a[4]')
        browser.pause(2000)
        browser.chooseFile('#fileselect1','/home/santiago/Documents/IT ROCKSTARS/snapshot.png');
        browser.pause(5000)
      })

//*[@id="startholder"]/div[3]/div[1]/div/a[3]
//*[@id="startholder"]/div[3]/div[1]/div/a[1]
}