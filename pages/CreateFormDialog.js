import { BasePage } from "./BasePage.js";

export class CreateFormDialog extends BasePage {

    constructor(page) {
        super(page);

        // Dialog Header
        this.dialogTitle = page.locator(
            '[data-header-label="Create form"]'
        );

        // Name
        this.nameInput = page.locator(
            'input[name="name"]'
        );

        // Description
        this.descriptionInput = page.locator(
            'input[name="description"]'
        );

        // Buttons
        this.createAndEditButton = page.locator(
            'button[name="submit"]'
        );

        this.cancelButton = page.locator(
            'button[name="cancel"]'
        );

        // Error Message (shown if duplicate name exists)
        this.errorBanner = page.locator(
            '.message-box, .notification, .alert'
        );
    }

    async verifyDialogOpened() {
        await this.assertVisible(this.dialogTitle);
    }

    async enterFormName(formName) {
        await this.clearAndFill(this.nameInput, formName);
    }

    async enterDescription(description) {
        await this.fill(this.descriptionInput, description);
    }

    async clickCreateAndEdit() {
        await this.click(this.createAndEditButton);
    }

    async clickCancel() {
        await this.click(this.cancelButton);
    }

    async createForm(formName, description = "") {

        await this.verifyDialogOpened();

        await this.enterFormName(formName);

        if (description !== "") {
            await this.enterDescription(description);
        }

        await this.clickCreateAndEdit();
    }

}