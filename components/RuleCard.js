import { BasePage } from "../pages/BasePage.js";

export class RuleCard extends BasePage {

    constructor(frame) {
        super(frame);

        this.frame = frame;
    }

    /**
     * Returns locator of a Rule Card
     * @param {number} index
     */
    getRule(index) {
        return this.frame.locator(".rule-border").nth(index);
    }

    /**
     * Returns Rule Title
     * @param {number} index
     */
    getRuleTitle(index) {
        return this.getRule(index)
            .locator("input");
    }

    /**
     * Expand Rule
     * @param {number} index
     */
    async expandRule(index) {

        const expandButton = this.getRule(index)
            .getByRole("button")
            .first();

        await this.click(expandButton);

    }

    /**
     * Collapse Rule
     * @param {number} index
     */
    async collapseRule(index) {

        const collapseButton = this.getRule(index)
            .getByRole("button")
            .first();

        await this.click(collapseButton);

    }

    /**
     * Rename Rule
     * @param {number} index
     * @param {string} ruleName
     */
    async renameRule(index, ruleName) {

        const title = this.getRuleTitle(index);

        await this.clearAndFill(title, ruleName);

    }

    /**
     * Get Rule Name
     * @param {number} index
     */
    async getRuleName(index) {

        return await this.getRuleTitle(index).inputValue();

    }

    /**
     * Open More Menu
     * @param {number} index
     */
    async openMoreMenu(index) {

        const menu = this.getRule(index)
            .getByRole("button")
            .last();

        await this.click(menu);

    }

    /**
     * Enable Rule
     * @param {number} index
     */
    async enableRule(index) {

        const toggle = this.getRule(index)
            .getByRole("checkbox");

        await this.check(toggle);

    }

    /**
     * Disable Rule
     * @param {number} index
     */
    async disableRule(index) {

        const toggle = this.getRule(index)
            .getByRole("checkbox");

        await this.uncheck(toggle);

    }

    /**
     * Verify Rule is Visible
     * @param {number} index
     */
    async verifyRuleVisible(index) {

        await this.assertVisible(this.getRule(index));

    }

}