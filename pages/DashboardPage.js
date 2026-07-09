import { BasePage } from "./BasePage.js";

export class DashboardPage extends BasePage {
    constructor(page) {
        super(page);

        // Left Navigation
        this.automationMenu = page.locator(
            'a[name="automations"]'
        );

        // Header
        this.automationHeader = page.locator(
            '[data-header-label="Automation"]'
        );

        // Create Button
        this.createButton = page
            .locator('[data-header-label="Automation"]')
            .locator('button[name="createOptions"]');

        // Create -> Form
        this.createFormButton = page.locator(
            'button[name="create-attended-form"]'
        );

        // Search
        this.searchBox = page.getByPlaceholder("Search");
    }

    async verifyDashboardLoaded() {
        await this.assertVisible(this.automationHeader);
    }

    async clickAutomationMenu() {
        await this.click(this.automationMenu);

        await this.assertVisible(this.automationHeader);
    }

    async openCreateMenu() {
        await this.click(this.createButton);
    }

    async createNewForm() {
        await this.openCreateMenu();
        await this.click(this.createFormButton);
    }

    async search(name) {
        await this.fill(this.searchBox, name);
    }
}