import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {

    async navigateTo(): Promise<unknown> {
        return browser.get(browser.baseUrl);
    }

    async navigateToLogin(): Promise<unknown> {
        return browser.get(`${browser.baseUrl}/login`);
    }

    async getTitleText(): Promise<string> {
        return element(by.css('app-root .content span')).getText();
    }

    async getElementId(id): Promise<ElementFinder> {
        return element(by.id(id));
    }
}
