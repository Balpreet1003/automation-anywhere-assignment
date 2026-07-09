import { test } from "../../fixtures/testFixture.js";
import { generateUniqueFormName } from "../../utils/helper.js";

test.describe("Login Tests", () => {

    test("Verify user can login successfully", async ({
        loginPage,
        dashboardPage,
        createFormDialog
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
            "Automation Anywhere Assignment"
        );

    });

});