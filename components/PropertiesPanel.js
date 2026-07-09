import { BasePage } from '../pages/BasePage.js';

export class PropertiesPanel extends BasePage {

    constructor(page) {
        super(page);

        this.panel = page.locator('.property-pane');

        this.resetButton = page.getByRole('button', { name: 'Reset' });
        this.deleteButton = page.getByRole('button', { name: 'Delete' });
    }

    /**
     * Return Property Panel
     */
    getPanel() {
        return this.panel;
    }

    /**
     * Set Element Label
     * @param {number} index
     * @param {string} label
     */
    async setElementLabel(index, label) {
        const input = this.page.locator(`#TextBox${index}-label input`);
        await this.clearAndFill(input, label);
    }

    /**
     * Set Default Value
     * @param {number} index
     * @param {string} value
     */
    async setDefaultValue(index, value) {
        const input = this.page.locator(`#TextBox${index}-defaultValue input`);
        await this.clearAndFill(input, value);
    }

    /**
     * Set Hint Text
     * @param {number} index
     * @param {string} hint
     */
    async setHint(index, hint) {
        const input = this.page.locator(`#TextBox${index}-hintText input`);
        await this.clearAndFill(input, hint);
    }

    /**
     * Set Tooltip
     * @param {number} index
     * @param {string} tooltip
     */
    async setTooltip(index, tooltip) {
        const textarea = this.page.locator(`#TextBox${index}-toolTip textarea`);
        await this.clearAndFill(textarea, tooltip);
    }

    /**
     * Set Minimum Length
     * @param {number} index
     * @param {number} value
     */
    async setMinimumLength(index, value) {
        const input = this.page.locator(`#TextBox${index}-minLength input`);
        await this.clearAndFill(input, value.toString());
    }

    /**
     * Set Maximum Length
     * @param {number} index
     * @param {number} value
     */
    async setMaximumLength(index, value) {
        const input = this.page.locator(`#TextBox${index}-maxLength input`);
        await this.clearAndFill(input, value.toString());
    }

    /**
     * Toggle Required Checkbox
     * @param {number} index
     */
    async toggleRequired(index) {
        const checkbox = this.page.locator(`#TextBox${index}-mandatory input`);
        await checkbox.click();
    }

    /**
     * Toggle Read Only Checkbox
     * @param {number} index
     */
    async toggleReadOnly(index) {
        const checkbox = this.page.locator(`#TextBox${index}-readOnly input`);
        await checkbox.click();
    }

    /**
     * Toggle Mask Data Checkbox
     * @param {number} index
     */
    async toggleMaskData(index) {
        const checkbox = this.page.locator(`#TextBox${index}-masked input`);
        await checkbox.click();
    }

    /**
     * Click Reset
     */
    async clickReset() {
        await this.click(this.resetButton);
    }

    /**
     * Click Delete
     */
    async clickDelete() {
        await this.click(this.deleteButton);
    }

    /**
     * Verify Property Panel is Visible
     */
    async isPanelVisible() {
        return await this.isVisible(this.panel);
    }
}