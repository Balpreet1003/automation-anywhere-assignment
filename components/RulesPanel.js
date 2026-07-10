import { BasePage } from "../pages/BasePage.js";

export class RulesPanel extends BasePage {

    constructor(frame) {
        super(frame);

        this.frame = frame;

        // Panel
        this.rulesPanel = this.frame.locator(".rule-border");

        // Search
        this.searchInput = this.frame.getByPlaceholder(
            "Search by rule name or element name"
        );

        // Buttons
        this.addRuleButton = this.frame.getByRole("button", {
            name: "Add rule"
        });

        this.addConditionButton = this.frame.getByRole("button", {
            name: "Add condition"
        });

        this.addGroupButton = this.frame.getByRole("button", {
            name: "Add Group"
        });

        this.addActionButton = this.frame.getByRole("button", {
            name: "Add action"
        });

        // AND / OR
        this.andButton = this.frame.getByRole("radio", {
            name: "AND"
        });

        this.orButton = this.frame.getByRole("radio", {
            name: "OR"
        });

        // IF / THEN
        this.ifSection = this.frame.getByText(
            "the following conditions are met"
        );

        this.thenSection = this.frame.getByText(
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