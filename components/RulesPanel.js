import { BasePage } from "../pages/BasePage.js";

export class RulesPanel extends BasePage {
    constructor(frame) {
        super(frame);

        this.frame = frame;

        // ----------------------------
        // Tabs
        // ----------------------------

        this.rulesTab = frame.locator(
            '[data-tab-name="Form rules"]'
        );

        // ----------------------------
        // Panel
        // ----------------------------

        this.rulesPanel = frame.locator(".rule-border");

        this.ruleList = frame.locator(".rule-list");

        this.searchInput = frame.getByPlaceholder(
            "Search by rule name or element name"
        );

        this.addRuleButton = frame.getByRole("button", {
            name: "Add rule",
        });

        // Global dropdown
        this.dropdown = frame.locator(
            '[data-path="RioSelectInput.Dropdown"]'
        );
    }

    // ==========================================================
    // Rule Helpers
    // ==========================================================

    getRule(ruleIndex = 0) {
        return this.frame.locator(
            `[id="Rule${ruleIndex + 1}"]`
        );
    }

    getCondition(ruleIndex = 0, conditionIndex = 0) {
        return this.getRule(ruleIndex).locator(
            `[data-condition-header-id="Rule${ruleIndex + 1}-Condition${conditionIndex}"]`
        );
    }

    getConditionSwitchboard(ruleIndex = 0, conditionIndex = 0) {
        return this.getRule(ruleIndex).locator(
            `[data-switchboard-for="Rule${ruleIndex + 1}-Condition${conditionIndex}"]`
        );
    }

    // getAction(ruleIndex = 0, actionIndex = 0) {
    //     return this.getRule(ruleIndex).locator(
    //         `[data-action-header-id="Rule${ruleIndex + 1}-Action${actionIndex}"]`
    //     );
    // }

    // ==========================================================
    // Verification
    // ==========================================================

    async openRulesTab() {
        await this.rulesTab.click();
        await this.verifyRulesPanelVisible();
    }

    async verifyRulesPanelVisible() {
        await this.assertVisible(this.rulesPanel);
    }

    async verifyRuleListVisible() {
        await this.assertVisible(this.ruleList);
    }

    // ==========================================================
    // Rule Buttons
    // ==========================================================

    async clickAddRule() {
        await this.addRuleButton.click();
    }

    async clickAddCondition(ruleIndex = 0) {
        await this.getRule(ruleIndex)
            .getByRole("button", {
                name: "Add condition",
            })
            .click();
    }

    async clickAddGroup(ruleIndex = 0) {
        await this.getRule(ruleIndex)
            .getByRole("button", {
                name: "Add Group",
            })
            .click();
    }

    async clickAddAction(ruleIndex = 0) {
        await this.getRule(ruleIndex)
            .getByRole("button", {
                name: "Add action",
            })
            .click();
    }

    // ==========================================================
    // Dropdown Helper
    // ==========================================================

    async selectFromDropdown(option) {
        const dropdown = this.dropdown;

        await dropdown.waitFor({
            state: "visible",
        });

        await dropdown
            .getByText(option, {
                exact: true,
            })
            .click();
    }

    // ==========================================================
    // Condition
    // ==========================================================

    async selectConditionElement(
        elementName,
        ruleIndex = 0,
        conditionIndex = 0
    ) {
        const condition = this.getCondition(
            ruleIndex,
            conditionIndex
        );

        await condition
            .locator(".supported-select-list .rio-select-input-query")
            .first()
            .click();

        await this.selectFromDropdown(elementName);
    }

    async selectConditionType(
        conditionName,
        ruleIndex = 0,
        conditionIndex = 0
    ) {
        const condition = this.getCondition(
            ruleIndex,
            conditionIndex
        );

        await condition
            .getByPlaceholder("Select condition")
            .click();

        await this.selectFromDropdown(conditionName);
    }

    async enterConditionValue(
        value,
        ruleIndex = 0,
        conditionIndex = 0
    ) {
        const condition = this.getCondition(
            ruleIndex,
            conditionIndex
        );

        await condition
            .getByPlaceholder("Enter value")
            .fill(value);
    }

    async selectAND(ruleIndex = 0, conditionIndex = 1) {

        await this.getConditionSwitchboard(
            ruleIndex,
            conditionIndex
        )
            .getByRole("radio", {
                name: "AND",
            })
            .click();
    }

    async selectOR(
        ruleIndex = 0,
        conditionIndex = 0
    ) {
        await this.getCondition(
            ruleIndex,
            conditionIndex
        )
            .getByRole("radio", {
                name: "OR",
            })
            .check();
    }

    // ==========================================================
    // Action
    // ==========================================================

    async selectOR(ruleIndex = 0, conditionIndex = 1) {

        await this.getConditionSwitchboard(
            ruleIndex,
            conditionIndex
        )
            .getByRole("radio", {
                name: "OR",
            })
            .click();
    }

    async selectActionType(
        actionType,
        ruleIndex = 0
    ) {
        const rule = this.getRule(ruleIndex);

        await rule
            .getByPlaceholder("Select action")
            .click();

        await this.dropdown
            .getByText(actionType, {
                exact: true,
            })
            .click();
    }

    async enterActionValue(
        value,
        ruleIndex = 0
    ) {
        const rule = this.getRule(ruleIndex);

        await rule
            .getByPlaceholder("Enter value")
            .fill(value);
    }

    async selectActionElement(
        elementName,
        ruleIndex = 0
    ) {
        const rule = this.getRule(ruleIndex);

        await rule
            .getByPlaceholder("Select element")
            .last()
            .click();

        await this.dropdown.waitFor({
            state: "visible",
        });

        await this.dropdown
            .getByText(elementName, {
                exact: true,
            })
            .click();
    }

    // ==========================================================
    // Search
    // ==========================================================

    async searchRule(ruleName) {
        await this.clearAndFill(
            this.searchInput,
            ruleName
        );
    }
}