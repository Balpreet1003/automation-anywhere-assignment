import { BasePage } from '../pages/BasePage.js';

export class Toolbox extends BasePage {
    constructor(page) {
        super(page);

        // Toolbox Controls
        this.textBox = page.locator('[data-item-name="TextBox"]');
        this.label = page.locator('[data-item-name="Label"]');
        this.password = page.locator('[data-item-name="Password"]');
        this.button = page.locator('[data-item-name="Button"]');
        this.dropdown = page.locator('[data-item-name="Dropdown"]');
        this.checkbox = page.locator('[data-item-name="CheckBoxGroup"]');
        this.date = page.locator('[data-item-name="Date"]');
        this.number = page.locator('[data-item-name="Number"]');
        this.textArea = page.locator('[data-item-name="TextArea"]');
        this.radioButton = page.locator('[data-item-name="RadioButtonGroup"]');
        this.image = page.locator('[data-item-name="Image"]');
        this.hyperlink = page.locator('[data-item-name="Hyperlink"]');
        this.table = page.locator('[data-item-name="Table"]');
        this.fileUpload = page.locator('[data-item-name="File"]');
        this.folderUpload = page.locator('[data-item-name="Folder"]');
        this.snapshot = page.locator('[data-item-name="Snapshot"]');
        this.time = page.locator('[data-item-name="Time"]');
    }

    async dragTextBox(target) {
        await this.dragAndDrop(this.textBox, target);
    }

    async dragLabel(target) {
        await this.dragAndDrop(this.label, target);
    }

    async dragPassword(target) {
        await this.dragAndDrop(this.password, target);
    }

    async dragButton(target) {
        await this.dragAndDrop(this.button, target);
    }

    async dragDropdown(target) {
        await this.dragAndDrop(this.dropdown, target);
    }

    async dragCheckbox(target) {
        await this.dragAndDrop(this.checkbox, target);
    }

    async dragDate(target) {
        await this.dragAndDrop(this.date, target);
    }

    async dragNumber(target) {
        await this.dragAndDrop(this.number, target);
    }

    async dragTextArea(target) {
        await this.dragAndDrop(this.textArea, target);
    }

    async dragRadioButton(target) {
        await this.dragAndDrop(this.radioButton, target);
    }

    async dragImage(target) {
        await this.dragAndDrop(this.image, target);
    }

    async dragHyperlink(target) {
        await this.dragAndDrop(this.hyperlink, target);
    }

    async dragTable(target) {
        await this.dragAndDrop(this.table, target);
    }

    async dragFileUpload(target) {
        await this.dragAndDrop(this.fileUpload, target);
    }

    async dragFolderUpload(target) {
        await this.dragAndDrop(this.folderUpload, target);
    }

    async dragSnapshot(target) {
        await this.dragAndDrop(this.snapshot, target);
    }

    async dragTime(target) {
        await this.dragAndDrop(this.time, target);
    }
}