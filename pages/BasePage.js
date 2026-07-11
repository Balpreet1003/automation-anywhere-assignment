/**
 * BasePage
 *
 * Purpose:
 * Contains reusable browser interaction methods
 * shared across all Page Objects.
 */

import { expect } from "@playwright/test";

export class BasePage {
    constructor(page) {
        this.page = page;
    }

    /**
     * Navigate to a URL
     * @param {string} url
     */
    async navigate(url) {
        await this.page.goto(url, {
            waitUntil: "networkidle",
        });
    }

    /**
     * Click on a locator
     * @param {import('@playwright/test').Locator} locator
     */
    async click(locator) {
        await locator.click();
    }

    /**
     * Fill input field
     * @param {import('@playwright/test').Locator} locator
     * @param {string} value
     */
    async fill(locator, value) {
        await locator.fill(value);
    }

    /**
     * Clear existing value and fill new value
     * @param {import('@playwright/test').Locator} locator
     * @param {string} value
     */
    async clearAndFill(locator, value) {
        await locator.clear();
        await locator.fill(value);
    }

    /**
     * Select dropdown option
     * @param {import('@playwright/test').Locator} locator
     * @param {string} value
     */
    async selectOption(locator, value) {
        await locator.selectOption(value);
    }

    /**
     * Check checkbox
     * @param {import('@playwright/test').Locator} locator
     */
    async check(locator) {
        await locator.check();
    }

    /**
     * Uncheck checkbox
     * @param {import('@playwright/test').Locator} locator
     */
    async uncheck(locator) {
        await locator.uncheck();
    }

    /**
     * Hover over element
     * @param {import('@playwright/test').Locator} locator
     */
    async hover(locator) {
        await locator.hover();
    }

    /**
     * Drag source locator to target locator
     * @param {import('@playwright/test').Locator} source
     * @param {import('@playwright/test').Locator} target
     */
    async dragAndDrop(source, target) {
        await source.dragTo(target);
    }

    /**
     * Wait until element is visible
     * @param {import('@playwright/test').Locator} locator
     */
    async waitForVisible(locator) {
        await locator.waitFor({
            state: "visible",
        });
    }

    /**
     * Wait until element is hidden
     * @param {import('@playwright/test').Locator} locator
     */
    async waitForHidden(locator) {
        await locator.waitFor({
            state: "hidden",
        });
    }

    /**
     * Scroll element into view
     * @param {import('@playwright/test').Locator} locator
     */
    async scrollIntoView(locator) {
        await locator.scrollIntoViewIfNeeded();
    }

    /**
     * Press keyboard key
     * @param {import('@playwright/test').Locator} locator
     * @param {string} key
     */
    async press(locator, key) {
        await locator.press(key);
    }

    /**
     * Get text from locator
     * @param {import('@playwright/test').Locator} locator
     * @returns {Promise<string | null>}
     */
    async getText(locator) {
        return await locator.textContent();
    }

    /**
     * Get value from input field
     * @param {import('@playwright/test').Locator} locator
     * @returns {Promise<string>}
     */
    async getValue(locator) {
        return await locator.inputValue();
    }

    /**
     * Check whether locator is visible
     * @param {import('@playwright/test').Locator} locator
     * @returns {Promise<boolean>}
     */
    async isVisible(locator) {
        return await locator.isVisible();
    }

    /**
     * Assert locator is visible
     * @param {import('@playwright/test').Locator} locator
     */
    async assertVisible(locator) {
        await expect(locator).toBeVisible();
    }

    /**
     * Assert locator is hidden
     * @param {import('@playwright/test').Locator} locator
     */
    async assertHidden(locator) {
        await expect(locator).toBeHidden();
    }

    /**
     * Assert locator contains expected text
     * @param {import('@playwright/test').Locator} locator
     * @param {string} expectedText
     */
    async assertText(locator, expectedText) {
        await expect(locator).toContainText(expectedText);
    }

    /**
     * Assert current page URL
     * @param {string|RegExp} expectedUrl
     */
    async assertURL(expectedUrl) {
        await expect(this.page).toHaveURL(expectedUrl);
    }

    /**
     * Get current page URL
     * @returns {Promise<string>}
     */
    async getCurrentUrl() {
        return this.page.url();
    }

    /**
     * Get page title
     * @returns {Promise<string>}
     */
    async getTitle() {
        return await this.page.title();
    }

    /**
     * Reload current page
     */
    async reload() {
        await this.page.reload({
            waitUntil: "networkidle",
        });
    }

    /**
     * Wait for page load to complete
     */
    async waitForPageLoad() {
        await this.page.waitForLoadState("domcontentloaded");
    }

    /**
     * Explicit wait (use only when absolutely necessary)
     * @param {number} milliseconds
     */
    async wait(milliseconds) {
        await this.page.waitForTimeout(milliseconds);
    }

    /**
     * Take full-page screenshot
     * @param {string} fileName
     */
    async takeScreenshot(fileName) {
        await this.page.screenshot({
            path: `screenshots/${fileName}.png`,
            fullPage: true,
        });
    }
}