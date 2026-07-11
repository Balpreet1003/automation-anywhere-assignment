import { expect } from "@playwright/test";
import { BasePage } from "../pages/BasePage.js";

export class RuleCard extends BasePage {
    constructor(frame) {
        super(frame);
        this.frame = frame;
    }

    // =========================================================
    // Rule
    // =========================================================

    getRule(index = 0) {
        return this.frame.locator(
            `[id="Rule${index + 1}"]`
        );
    }

    getRuleNameInput(index = 0) {
        return this.getRule(index)
            .locator("input")
            .first();
    }

    getExpandButton(index = 0) {
        return this.getRule(index)
            .locator("button")
            .first();
    }

    getMenuButton(index = 0) {
        return this.getRule(index)
            .locator("button")
            .last();
    }

    getEnableToggle(index = 0) {
        return this.getRule(index)
            .getByRole("checkbox");
    }

    getEditButton(index = 0) {
        return this.getRule(index)
            .getByRole("button", {
                name: /Edit/i,
            });
    }

    // =========================================================
    // Rule Name
    // =========================================================

    async renameRule(index, name) {
        const input = this.getRuleNameInput(index);

        await input.click();
        await input.fill("");
        await input.fill(name);
        await input.press("Enter");
    }

    async getRuleName(index) {
        return await this.getRuleNameInput(index).inputValue();
    }

    async verifyRuleName(index, expected) {
        await expect(
            this.getRuleNameInput(index)
        ).toHaveValue(expected);
    }

    // =========================================================
    // Expand / Collapse
    // =========================================================

    async expandRule(index = 0) {
        const rule = this.getRule(index);

        await rule.scrollIntoViewIfNeeded();

        const button = this.getExpandButton(index);

        await button.click();
    }

    async collapseRule(index = 0) {
        const rule = this.getRule(index);

        await rule.scrollIntoViewIfNeeded();

        const button = this.getExpandButton(index);

        await button.click();
    }

    async verifyExpanded(index = 0) {
        await expect(
            this.getRule(index).getByText(
                "the following conditions are met"
            )
        ).toBeVisible();
    }

    // =========================================================
    // Menu
    // =========================================================

    async openMenu(index = 0) {
        await this.getMenuButton(index).click();
    }

    async clickAddRuleBelow(index = 0) {
        await this.openMenu(index);

        await this.frame
            .getByText("Add Rule Below", {
                exact: true,
            })
            .click();
    }

    async duplicateRule(index = 0) {
        await this.openMenu(index);

        await this.frame
            .getByText("Duplicate", {
                exact: true,
            })
            .click();
    }

    async deleteRule(index = 0) {
        await this.openMenu(index);

        await this.frame
            .getByText("Delete", {
                exact: true,
            })
            .click();
    }

    // =========================================================
    // Toggle
    // =========================================================

    async enableRule(index = 0) {
        await this.getEnableToggle(index).check();
    }

    async disableRule(index = 0) {
        await this.getEnableToggle(index).uncheck();
    }

    // =========================================================
    // Verification
    // =========================================================

    async verifyRuleVisible(index = 0) {
        await expect(
            this.getRule(index)
        ).toBeVisible();
    }

    async verifyEditButton(index = 0) {
        await expect(
            this.getEditButton(index)
        ).toBeVisible();
    }

    async verifyRuleCount(count) {
        await expect(
            this.frame.locator('[id^="Rule"]')
        ).toHaveCount(count);
    }
}