import { test, expect } from "../../fixtures/testFixture.js";

test.describe("Login Tests", () => {

    test("Verify user can login successfully", async ({
        page,
        loginPage,
        dashboardPage
    }) => {

        // Navigate to Login Page
        await loginPage.navigateToLogin();

        // Login
        await loginPage.login(
            process.env.EMAIL,
            process.env.PASSWORD
        );

        // Verify Dashboard
        await dashboardPage.verifyDashboardLoaded();

    });

});