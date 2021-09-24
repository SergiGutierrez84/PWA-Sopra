import { browser, by, element, logging } from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('should display login', async () => {
        await page.navigateTo();
    });

    it('loggedIn with user1', async () => {
        expect((await page.getElementId('username')).sendKeys('user1'));
        expect((await page.getElementId('password')).sendKeys('***'));

        await element(by.buttonText('Login')).click();
        await browser.driver.sleep(10);
    });

    it('should display home', () => {
        const h2 = element(by.tagName('h2'));
        expect(h2.getText()).toContain('Welcome');
    });

    it('close session PWA', async () => {
        await element(by.buttonText('LOGOUT')).click();
        await element(by.buttonText('Ok')).click();
    });

    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE,
        } as logging.Entry));
    });
});
