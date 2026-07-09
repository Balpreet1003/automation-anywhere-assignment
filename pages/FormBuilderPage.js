import { BasePage } from "./BasePage.js";

import { Toolbox } from "../components/Toolbox.js";
import { Canvas } from "../components/Canvas.js";
import { PropertiesPanel } from "../components/PropertiesPanel.js";
import { RulesPanel } from "../components/RulesPanel.js";
import { RuleCard } from "../components/RuleCard.js";

export class FormBuilderPage extends BasePage {

    constructor(page) {
        super(page);

        // Components
        this.toolbox = new Toolbox(page);
        this.canvas = new Canvas(page);
        this.propertiesPanel = new PropertiesPanel(page);
        this.rulesPanel = new RulesPanel(page);
        this.ruleCard = new RuleCard(page);

        // Top Toolbar
        this.saveButton = page.getByRole("button", {
            name: "Save"
        });

        this.previewButton = page.getByRole("button", {
            name: "Preview"
        });

        this.publishButton = page.getByRole("button", {
            name: "Publish"
        });

        this.formName = page.locator('input[placeholder="Enter form name"]');
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

        await this.toolbox.dragTextBox(
            this.canvas.getCanvas()
        );

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
     * Add Password Field
     */
    async addPassword() {

        await this.toolbox.dragPassword(
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

        await this.canvas.clickField(label);

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

}