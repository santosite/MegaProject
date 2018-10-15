import { Page } from './page';
class profilePage extends Page {
    get upFile()    { return browser.element('//*[@id="fileselect1"]')}
    openDas(maximized = true) {
        super.openDash('');
        if(maximized) super.maximize();
    }
    click(elem){
        super.click(elem);
    }
    switchTab(){
        let windowHandle = browser.windowHandle();
        browser.switchTab([windowHandle]);
    }
}

export default new profilePage();