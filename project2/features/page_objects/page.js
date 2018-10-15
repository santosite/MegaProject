export class Page{
    constructor() {
        this.urlhot = 'https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1539572128&rver=7.0.6737.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fRpsCsrfState%3df147af8a-03ee-2555-bfc8-ecdffd848aec&id=292841&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015';
        this.urlMega = 'https://mega.nz/start';
        this.urlDas = 'https://mega.nz/fm/dashboard'
    }

    openMega(path){
        browser.url(this.urlMega+path);
    }
    openHot(path){
        browser.url(this.urlhot+path);
    }
    openDash(path){
        browser.url(this.urlDas+path);
    }
    maximize() {
        let windowHandle = browser.windowHandle();
        browser.windowHandleMaximize([windowHandle]);
    }
    click(elem){
        browser.click(elem)
    }
}