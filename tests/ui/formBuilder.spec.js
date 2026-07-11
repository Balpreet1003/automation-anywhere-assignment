import { test, expect } from "../../fixtures/testFixture.js";
import { generateUniqueFormName } from "../../utils/helper.js";

test.describe("Form Builder", () => {

    test("Verify user can create a form with four textbox fields", async ({
        loginPage,
        dashboardPage,
        createFormDialog,
        formBuilderPage,
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

        await formBuilderPage.createTextBoxField(
            0,
            "First Name",
            "Balpreet"
        );

        await formBuilderPage.createTextBoxField(
            1,
            "Last Name",
            "Singh"
        );

        await formBuilderPage.createTextBoxField(
            2,
            "Email",
            "balpreetsingh83@gmail.com"
        );

        await formBuilderPage.createTextBoxField(
            3,
            "Contact",
            "9669666066"
        );

        await expect(formBuilderPage.canvas.textBoxes).toHaveCount(4);
    });

});