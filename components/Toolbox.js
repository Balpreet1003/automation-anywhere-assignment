import { BasePage } from '../pages/BasePage.js';

export class Toolbox extends BasePage {
    constructor(frame) {
        super(frame);

        this.frame = frame;

        // Toolbox Controls
        this.textBox = this.frame.locator('[data-item-name="TextBox"]');
        this.label = this.frame.locator('[data-item-name="Label"]');
        this.password = this.frame.locator('[data-item-name="Password"]');
        this.button = this.frame.locator('[data-item-name="Button"]');
        this.dropdown = this.frame.locator('[data-item-name="Dropdown"]');
        this.checkbox = this.frame.locator('[data-item-name="CheckBoxGroup"]');
        this.date = this.frame.locator('[data-item-name="Date"]');
        this.number = this.frame.locator('[data-item-name="Number"]');
        this.textArea = this.frame.locator('[data-item-name="TextArea"]');
        this.radioButton = this.frame.locator('[data-item-name="RadioButtonGroup"]');
        this.image = this.frame.locator('[data-item-name="Image"]');
        this.hyperlink = this.frame.locator('[data-item-name="Hyperlink"]');
        this.table = this.frame.locator('[data-item-name="Table"]');
        this.fileUpload = this.frame.locator('[data-item-name="File"]');
        this.folderUpload = this.frame.locator('[data-item-name="Folder"]');
        this.snapshot = this.frame.locator('[data-item-name="Snapshot"]');
        this.time = this.frame.locator('[data-item-name="Time"]');
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