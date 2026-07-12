import { expect } from "@playwright/test";

import { BasePage } from "./BasePage.js";

import { Toolbox } from "../components/Toolbox.js";
import { Canvas } from "../components/Canvas.js";
import { PropertiesPanel } from "../components/PropertiesPanel.js";
import { RulesPanel } from "../components/RulesPanel.js";

export class FormBuilderPage extends BasePage {
    constructor(page) {
        super(page);

        // Form Builder iframe
        this.builderFrame = page.frameLocator("iframe").first();

        // Components
        this.toolbox = new Toolbox(this.builderFrame);
        this.canvas = new Canvas(this.builderFrame);
        this.propertiesPanel = new PropertiesPanel(this.builderFrame);
        this.rulesPanel = new RulesPanel(this.builderFrame);

        // Toolbar
        this.saveButton = this.builderFrame.getByRole("button", {
            name: "Save",
        });

        this.previewButton = this.builderFrame.getByRole("button", {
            name: "Preview",
        });

        this.publishButton = this.builderFrame.getByRole("button", {
            name: "Publish",
        });

        this.formName = this.builderFrame.locator(
            'input[placeholder="Enter form name"]'
        );
    }

    // =========================================================
    // Builder
    // =========================================================

    async waitForBuilderReady() {
        await this.waitForVisible(this.canvas.getCanvas());
    }

    async setFormName(name) {
        await this.waitForBuilderReady();
        await this.clearAndFill(this.formName, name);
    }

    // =========================================================
    // Canvas
    // =========================================================

    async addTextBox() {
        await this.waitForBuilderReady();

        const before = await this.canvas.getTextBoxCount();

        await this.toolbox.dragTextBox(
            this.canvas.getCanvas()
        );

        await expect(
            this.canvas.textBoxes
        ).toHaveCount(before + 1);
    }

    async addLabel() {
        await this.toolbox.dragLabel(
            this.canvas.getCanvas()
        );
    }

    // =========================================================
    // Configure Controls
    // =========================================================

    async configureTextBox(
        index,
        label,
        hint,
        tooltip
    ) {
        await this.canvas.clickTextBox(index);

        await this.propertiesPanel.setElementLabel(
            index,
            label
        );

        await this.propertiesPanel.setHint(
            index,
            hint
        );

        await this.propertiesPanel.setTooltip(
            index,
            tooltip
        );
    }

    async createTextBoxField(
        index,
        label,
        defaultValue
    ) {
        await this.addTextBox();

        await this.configureTextBox(
            index,
            label,
            `Enter ${label}`,
            `Enter ${label}`
        );

        await this.propertiesPanel.setDefaultValue(
            index,
            defaultValue
        );
    }

    async createFirstNameField() {
        await this.createTextBoxField(
            0,
            "First Name",
            "Balpreet"
        );
    }

    async createPasswordField() {
        await this.createTextBoxField(
            1,
            "Password",
            ""
        );
    }

    // =========================================================
    // Rule Builder
    // =========================================================

    async createRule1() {

        await this.rulesPanel.openRulesTab();

        await this.rulesPanel.clickAddRule();

        await this.rulesPanel.selectConditionElement(
            "First Name - TextBox0"
        );

        await this.rulesPanel.selectConditionType(
            "Is not empty"
        );

        await this.rulesPanel.clickAddCondition();

        await this.rulesPanel.selectAND();

        await this.rulesPanel.selectSecondConditionElement(
            "Last Name - TextBox1"
        );

        await this.rulesPanel.selectSecondConditionType(
            "Is not empty"
        );

        await this.rulesPanel.selectActionElement(
            "Contact - TextBox3"
        );

        await this.rulesPanel.selectAction(
            "Disable"
        );
    }

    async createRule2() {

        await this.rulesPanel.clickAddRule();

        await this.rulesPanel.selectConditionElement(
            "First Name - TextBox0"
        );

        await this.rulesPanel.selectConditionType(
            "Is not empty"
        );

        await this.rulesPanel.selectActionElement(
            "Email - TextBox2"
        );

        await this.rulesPanel.selectAction(
            "Set value"
        );

        await this.rulesPanel.enterActionValue(
            "balpreetSingh83@gmail.com"
        );
    }

    async createRule3() {

        await this.rulesPanel.clickAddRule();

        await this.rulesPanel.selectConditionElement(
            "Last Name - TextBox1"
        );

        await this.rulesPanel.selectConditionType(
            "Is empty"
        );

        await this.rulesPanel.selectActionElement(
            "Email - TextBox2"
        );

        await this.rulesPanel.selectAction(
            "Set value"
        );

        await this.rulesPanel.enterActionValue(
            "balpreet83@gmail.com"
        );
    }

    // =========================================================
    // Save
    // =========================================================

    async saveForm() {
        await this.saveButton.click();
    }
}