import { BasePage } from "../pages/BasePage.js";

export class RulesPanel extends BasePage {

    constructor(page) {
        super(page);

        // Panel
        this.rulesPanel = page.locator(".rule-border");

        // Search
        this.searchInput = page.getByPlaceholder(
            "Search by rule name or element name"
        );

        // Buttons
        this.addRuleButton = page.getByRole("button", {
            name: "Add rule"
        });

        this.addConditionButton = page.getByRole("button", {
            name: "Add condition"
        });

        this.addGroupButton = page.getByRole("button", {
            name: "Add Group"
        });

        this.addActionButton = page.getByRole("button", {
            name: "Add action"
        });

        // AND / OR
        this.andButton = page.getByRole("radio", {
            name: "AND"
        });

        this.orButton = page.getByRole("radio", {
            name: "OR"
        });

        // IF / THEN
        this.ifSection = page.getByText("the following conditions are met");

        this.thenSection = page.getByText(
            "perform the following actions"
        );
    }

    /**
     * Click Add Rule
     */
    async clickAddRule() {
        await this.click(this.addRuleButton);
    }

    /**
     * Search Rule
     * @param {string} ruleName
     */
    async searchRule(ruleName) {
        await this.clearAndFill(this.searchInput, ruleName);
    }

    /**
     * Click Add Condition
     */
    async clickAddCondition() {
        await this.click(this.addConditionButton);
    }

    /**
     * Click Add Group
     */
    async clickAddGroup() {
        await this.click(this.addGroupButton);
    }

    /**
     * Click Add Action
     */
    async clickAddAction() {
        await this.click(this.addActionButton);
    }

    /**
     * Select AND Mode
     */
    async selectAND() {
        await this.click(this.andButton);
    }

    /**
     * Select OR Mode
     */
    async selectOR() {
        await this.click(this.orButton);
    }

    /**
     * Verify Rules Panel is Visible
     */
    async isRulesPanelVisible() {
        return await this.isVisible(this.rulesPanel);
    }

    /**
     * Verify IF Section
     */
    async verifyIfSection() {
        await this.assertVisible(this.ifSection);
    }

    /**
     * Verify THEN Section
     */
    async verifyThenSection() {
        await this.assertVisible(this.thenSection);
    }
}