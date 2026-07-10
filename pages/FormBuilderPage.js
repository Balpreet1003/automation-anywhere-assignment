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

        // Form Builder is inside an iframe
        this.builderFrame = page.frameLocator("iframe").first();

        // Components
        this.toolbox = new Toolbox(this.builderFrame);
        this.canvas = new Canvas(this.builderFrame);
        this.propertiesPanel = new PropertiesPanel(this.builderFrame);
        this.rulesPanel = new RulesPanel(this.builderFrame);
        this.ruleCard = new RuleCard(this.builderFrame);

        // Toolbar
        this.saveButton = this.builderFrame.getByRole("button", {
            name: "Save"
        });

        this.previewButton = this.builderFrame.getByRole("button", {
            name: "Preview"
        });

        this.publishButton = this.builderFrame.getByRole("button", {
            name: "Publish"
        });

        this.formName = this.builderFrame.locator(
            'input[placeholder="Enter form name"]'
        );
    }

    /**
     * Set Form Name
     */
    async setFormName(name) {
        await this.clearAndFill(this.formName, name);
    }

    /**
     * Add TextBox
     */
    async addTextBox() {

        const before = await this.canvas.getTextBoxCount();

        await this.toolbox.dragTextBox(
            this.canvas.getCanvas()
        );

        await expect(this.canvas.textBoxes).toHaveCount(before + 1);

    }

    /**
     * Add Label
     */
    async addLabel() {

        await this.toolbox.dragLabel(
            this.canvas.getCanvas()
        );

    }

    /**
     * Configure TextBox
     */
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

    /**
     * Create Rule
     */
    async createRule() {

        await this.rulesPanel.clickAddRule();

    }

    /**
     * Save Form
     */
    async saveForm() {

        await this.click(this.saveButton);

    }

    /**
     * Preview Form
     */
    async previewForm() {

        await this.click(this.previewButton);

    }

    /**
     * Publish Form
     */
    async publishForm() {

        await this.click(this.publishButton);

    }

    /**
     * Create First Name Field
     */
    async createFirstNameField() {

        await this.addTextBox();

        await this.configureTextBox(
            0,
            "First Name",
            "Enter First Name",
            "Enter First Name"
        );

    }

    /**
     * Create Password Field
     * (Uses another TextBox)
     */
    async createPasswordField() {

        await this.addTextBox();

        await this.configureTextBox(
            1,
            "Password",
            "Enter Password",
            "Enter Password"
        );

    }

}