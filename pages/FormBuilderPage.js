import { expect } from "@playwright/test";

import { BasePage } from "./BasePage.js";

import { Toolbox } from "../components/Toolbox.js";
import { Canvas } from "../components/Canvas.js";
import { PropertiesPanel } from "../components/PropertiesPanel.js";
import { RulesPanel } from "../components/RulesPanel.js";
import { RuleCard } from "../components/RuleCard.js";

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
        this.ruleCard = new RuleCard(this.builderFrame);

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
    // Rules
    // =========================================================

    async openRules() {
        await this.rulesPanel.openRulesTab();
    }

    async addRule() {
        await this.rulesPanel.clickAddRule();
    }

    // =========================================================
    // Toolbar
    // =========================================================

    async saveForm() {
        await this.click(this.saveButton);
    }

    async previewForm() {
        await this.click(this.previewButton);
    }

    async publishForm() {
        await this.click(this.publishButton);
    }
}