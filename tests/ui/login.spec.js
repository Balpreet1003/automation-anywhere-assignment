import { test, expect } from "../../fixtures/testFixture.js";

test.describe("Login Tests", () => {

    test("Verify user can login successfully", async ({
        loginPage,
        page,
    }) => {

        await loginPage.navigateToLogin();

        await loginPage.login(
            process.env.EMAIL,
            process.env.PASSWORD
        );

        await expect(page).toHaveURL(/#\/home/);

    });

});