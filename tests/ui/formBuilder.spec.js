import { test, expect } from "../../fixtures/testFixture.js";
import { generateUniqueFormName } from "../../utils/helper.js";

test.describe("Form Builder", () => {

    test("Verify user can create a form with First Name and Password fields", async ({
        loginPage,
        dashboardPage,
        createFormDialog,
        formBuilderPage
    }) => {

        // Login
        await loginPage.navigateToLogin();

        await loginPage.login(
            process.env.EMAIL,
            process.env.PASSWORD
        );

        // Open Automation
        await dashboardPage.clickAutomationMenu();

        // Create New Form
        await dashboardPage.createNewForm();

        const formName = generateUniqueFormName();

        await createFormDialog.createForm(
            formName,
            "Playwright UI Automation"
        );

        // Add First Name TextBox
        await formBuilderPage.createFirstNameField();

        // Add Password TextBox
        await formBuilderPage.createPasswordField();

        // Verify two TextBoxes are added
        await expect(
            formBuilderPage.canvas.textBoxes
        ).toHaveCount(2);

        // Save Form
        await formBuilderPage.saveForm();

    });

});