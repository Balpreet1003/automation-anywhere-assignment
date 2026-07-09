import { BasePage } from "./BasePage.js";

export class DashboardPage extends BasePage {
    constructor(page) {
        super(page);

        // Left navigation
        this.automationMenu = page.getByRole("link", {
            name: "Automation",
        });

        // Header
        this.homeMenu = page.getByRole("link", {
            name: "Home",
        });

        // Create Button
        this.createButton = page.getByRole("button", {
            name: "Create",
        });

        // Search Box
        this.searchBox = page.getByPlaceholder("Search");

        // Existing Form
        this.uiAutomationAssignment = page.getByRole("link", {
            name: "UI Automation Assignment",
        });
    }

    async verifyDashboardLoaded() {
        await this.assertVisible(this.homeMenu);
    }

    async clickAutomationMenu() {
        await this.click(this.automationMenu);
    }

    async clickCreate() {
        await this.click(this.createButton);
    }

    async search(name) {
        await this.fill(this.searchBox, name);
    }

    async openExistingForm() {
        await this.click(this.uiAutomationAssignment);
    }
}