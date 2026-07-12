import { BasePage } from "../pages/BasePage.js";

export class RulesPanel extends BasePage {

    constructor(frame) {
        super(frame);

        this.frame = frame;

        // -------------------------
        // Tabs
        // -------------------------

        this.rulesTab = this.frame.getByRole(
            'tab', { name: '[object Object]' }
        );

        // -------------------------
        // Main Panel
        // -------------------------

        this.rulesPanel =
            this.frame.locator(".rule-border");

        this.ruleList =
            this.frame.locator(".rule-list");

        // -------------------------
        // Buttons
        // -------------------------

        this.addRuleButton =
            this.frame.getByRole("button", {
                name: "Add rule"
            });

        this.addConditionButton =
            this.frame.getByRole("button", {
                name: "Add condition"
            });

        this.addActionButton =
            this.frame.getByRole("button", {
                name: "Add action"
            });

        this.addGroupButton =
            this.frame.getByRole("button", {
                name: "Add Group"
            });

        // -------------------------
        // Search
        // -------------------------

        this.searchInput =
            this.frame.getByPlaceholder(
                "Search by rule name or element name"
            );

        // -------------------------
        // IF / THEN
        // -------------------------

        this.ifSection =
            this.frame.getByText(
                "the following conditions are met"
            );

        this.thenSection =
            this.frame.getByText(
                "perform the following actions"
            );

        // -------------------------
        // First Condition
        // -------------------------

        this.firstConditionElement =
            this.frame
                .locator(
                    ".rio-focus.rio-focus--inset_1px.rio-focus--border-radius_2px.rio-select-input-query"
                )
                .first();

        this.firstConditionType =
            this.frame
                .locator(
                    ".gridlayout-content > .gridlayout > .gridlayout-row > .gridlayout-column > .gridlayout-content > .rio-select-input > div > .rio-focus"
                )
                .first();

        // -------------------------
        // Second Condition
        // -------------------------

        this.secondConditionElement =
            this.frame
                .getByRole("textbox", {
                    name: "Select element"
                })
                .first();

        this.secondConditionType =
            this.frame.getByRole(
                "textbox",
                {
                    name: "Select condition"
                }
            );

        // -------------------------
        // AND / OR
        // -------------------------

        this.andRadio =
            this.frame.getByRole(
                "radio",
                {
                    name: "AND"
                }
            );

        this.orRadio =
            this.frame.getByRole(
                "radio",
                {
                    name: "OR"
                }
            );

        // -------------------------
        // Action
        // -------------------------

        this.actionElement =
            this.frame
                .getByRole("textbox", {
                    name: "Select element"
                })
                .last();

        this.actionType =
            this.frame.getByRole(
                "textbox",
                {
                    name: "Select action"
                }
            );

        this.actionValue =
            this.frame.getByRole(
                "textbox",
                {
                    name: "Enter value"
                }
            );
    }

    // ======================================================
    // Navigation
    // ======================================================

    async openRulesTab() {

        await this.click(this.rulesTab);

    }

    // ======================================================
    // Rule
    // ======================================================

    async clickAddRule() {

        await this.click(
            this.addRuleButton
        );

    }

    async searchRule(rule) {

        await this.clearAndFill(
            this.searchInput,
            rule
        );

    }

    // ======================================================
    // Condition
    // ======================================================

    async clickFirstConditionElement() {

        await this.click(
            this.firstConditionElement
        );

    }

    async selectConditionElement(name) {

        await this.clickFirstConditionElement();

        await this.frame
            .getByText(name)
            .click();

    }

    async clickFirstConditionType() {

        await this.click(
            this.firstConditionType
        );

    }

    async selectConditionType(type) {

        await this.clickFirstConditionType();

        await this.frame
            .getByText(type)
            .first()
            .click();

    }

    async clickAddCondition() {

        await this.click(
            this.addConditionButton
        );

    }

    async selectAND() {

        await this.click(
            this.andRadio
        );

    }

    async selectOR() {

        await this.click(
            this.orRadio
        );

    }

    async selectSecondConditionElement(name) {

        await this.click(
            this.secondConditionElement
        );

        await this.frame
            .getByText(name)
            .click();

    }

    async selectSecondConditionType(type) {

        await this.click(
            this.secondConditionType
        );

        await this.frame
            .getByText(type)
            .last()
            .click();

    }

    // ======================================================
    // Action
    // ======================================================

    async clickAddAction() {

        await this.click(
            this.addActionButton
        );

    }

    async selectActionElement(name) {

        await this.click(
            this.actionElement
        );

        await this.frame
            .locator('label').filter({ hasText: name })
            .click();

    }

    async selectAction(action) {

        await this.click(
            this.actionType
        );

        await this.frame
            .getByText(action)
            .first()
            .click();

    }

    async enterActionValue(value) {

        await this.clearAndFill(
            this.actionValue,
            value
        );

    }
}