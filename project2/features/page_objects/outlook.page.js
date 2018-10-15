import { Page } from './page';
class hotPage extends Page {
    get email() { return browser.element('//*[@id="i0116"]');}
    get psswd() { return browser.element('//*[@id="i0118"]');}
    get confPwd() { return browser.element('//*[@id="login-password2"]');}
    openHot(maximized = true) {
        super.openHot('');
        if(maximized) super.maximize();
    }
    click(elem){
        super.click(elem);
    }

}

export default new hotPage();