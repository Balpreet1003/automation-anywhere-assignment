import { test } from "../../fixtures/testFixture.js";
import { generateUniqueFormName } from "../../utils/helper.js";

test.describe("Rules Builder", () => {

    test("Verify user can add a rule and save the form", async ({
        page,
        loginPage,
        dashboardPage,
        createFormDialog,
        formBuilderPage,
    }) => {

        await loginPage.navigateToLogin();

        await loginPage.login(
            process.env.EMAIL,
            process.env.PASSWORD
        );

        await dashboardPage.clickAutomationMenu();

        await dashboardPage.createNewForm();

        const formName = generateUniqueFormName();

        await createFormDialog.createForm(
            formName,
            "Playwright UI Automation"
        );

        await formBuilderPage.waitForBuilderReady();

        // ----------------------------------------------------
        // Create Form Elements
        // ----------------------------------------------------

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

        // ----------------------------------------------------
        // Rules
        // ----------------------------------------------------
        
        await formBuilderPage.createRule1();

        await formBuilderPage.createRule2();

        await formBuilderPage.createRule3();

        await formBuilderPage.saveForm();

    });

});