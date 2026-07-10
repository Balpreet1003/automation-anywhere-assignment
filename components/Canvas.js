import { BasePage } from '../pages/BasePage.js';

export class Canvas extends BasePage {
    constructor(frame) {
        super(frame);

        this.frame = frame;

        // Main Form Canvas
        this.canvas = this.frame.locator('[data-item-type="content"]');

        // Canvas Rows
        this.rows = this.frame.locator('[data-item-type="row"]');

        // Canvas Columns
        this.columns = this.frame.locator('[data-item-type="col"]');

        // Drop Zone
        this.dropZone = this.frame.locator('.formcanvas-dropzone-bar');

        // All TextBoxes
        this.textBoxes = this.frame.locator('.preview-textbox');

        // All Labels
        this.labels = this.frame.locator('.field-label');
    }

    /**
     * Return Canvas Locator
     */
    getCanvas() {
        return this.canvas;
    }

    /**
     * Return Drop Zone Locator
     */
    getDropZone() {
        return this.dropZone;
    }

    /**
     * Return Total Number of Rows
     */
    async getRowCount() {
        return await this.rows.count();
    }

    /**
     * Return Total Number of Columns
     */
    async getColumnCount() {
        return await this.columns.count();
    }

    /**
     * Check whether a field exists
     * @param {string} label
     */
    async hasField(label) {
        return await this.frame
            .locator(`[data-label="${label}"]`)
            .isVisible();
    }

    /**
     * Return Locator of a field using label
     * @param {string} label
     */
    getField(label) {
        return this.frame.locator(`[data-label="${label}"]`);
    }

    /**
     * Click Field
     * @param {string} label
     */
    async clickField(label) {
        await this.click(this.getField(label));
    }

    /**
     * Get Number of Text Boxes
     */
    async getTextBoxCount() {
        return await this.textBoxes.count();
    }

    /**
     * Get Label Text
     * @param {number} index
     */
    async getLabelText(index) {
        return await this.labels.nth(index).textContent();
    }

    /**
     * Scroll Canvas into View
     */
    async scrollToCanvas() {
        await this.scrollIntoView(this.canvas);
    }

   getTextBox(index) {
        return this.frame.locator(`#TextBox${index}`);
    }

    /**
     * Click TextBox by index
     * @param {number} index
     */
    async clickTextBox(index) {
        await this.click(this.getTextBox(index));
    }

    /**
     * Verify TextBox is visible
     * @param {number} index
     */
    async verifyTextBoxVisible(index) {
        await this.assertVisible(this.getTextBox(index));
    }
}