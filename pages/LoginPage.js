/**
 * LoginPage
 *
 * Responsibility:
 * Handle all login-related interactions.
 */

import { BasePage } from './BasePage.js';

export class LoginPage extends BasePage {
    constructor(page) {
        super(page);

        // Locators
        this.usernameInput = page.locator('input[name="username"]');
        this.passwordInput = page.locator('input[name="password"]');
        this.loginButton = page.locator('button[name="submitLogin"]');
    }

    /**
     * Navigate to login page
     */
    async navigateToLogin() {
        await this.navigate('/');
        await this.waitForPageLoad();
    }

    /**
     * Enter username
     * @param {string} username
     */
    async enterUsername(username) {
        await this.fill(this.usernameInput, username);
    }

    /**
     * Enter password
     * @param {string} password
     */
    async enterPassword(password) {
        await this.fill(this.passwordInput, password);
    }

    /**
     * Click Login button
     */
    async clickLogin() {
        await this.click(this.loginButton);
    }

    /**
     * Perform complete login
     * @param {string} username
     * @param {string} password
     */
    async login(username, password) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLogin();
        await this.waitForPageLoad();
    }
}