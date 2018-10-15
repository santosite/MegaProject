import { Page } from './page';
class megaPage extends Page {

    get name() { return browser.element('//*[@id="register-firstname-registerpage2"]');}
    get lastName()  { return browser.element('//*[@id="register-lastname-registerpage2"]');}
    get email() {return browser.element('//*[@id="register-email-registerpage2"]')}
    get psswd() { return browser.element('//*[@id="register-password-registerpage2"]')}
    get repsswd() { return browser.element('//*[@id="register-password-registerpage3"]')}
    get confPwd() { return browser.element('//*[@id="login-password2"]');}
    openMega(maximized = true) {
        super.openMega('');
        if(maximized) super.maximize();
    }
    click(elem){
        super.click(elem);
    }

}

export default new megaPage();
