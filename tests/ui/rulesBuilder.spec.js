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

        await page.locator('iframe').first().contentFrame().getByRole('tab', { name: '[object Object]' }).click();
        await page.locator('iframe').first().contentFrame().getByRole('button', { name: 'Add rule' }).click();
        await page.locator('iframe').first().contentFrame().locator('.rio-focus.rio-focus--inset_1px.rio-focus--border-radius_2px.rio-select-input-query').first().click();
        await page.locator('iframe').first().contentFrame().getByText('First Name - TextBox0').click();
        await page.locator('iframe').first().contentFrame().locator('.gridlayout-content > .gridlayout > .gridlayout-row > .gridlayout-column > .gridlayout-content > .rio-select-input > div > .rio-focus.rio-focus--inset_1px').first().click();
        await page.locator('iframe').first().contentFrame().getByText('Is not empty').click();
        await page.locator('iframe').first().contentFrame().getByRole('button', { name: 'Add condition' }).click();
        await page.locator('iframe').first().contentFrame().getByRole('radio', { name: 'AND' }).click();
        await page.locator('iframe').first().contentFrame().getByRole('textbox', { name: 'Select element' }).first().click();
        await page.locator('iframe').first().contentFrame().locator('span').filter({ hasText: 'Last Name - TextBox1' }).nth(2).click();
        await page.locator('iframe').first().contentFrame().getByRole('textbox', { name: 'Select condition' }).click();
        await page.locator('iframe').first().contentFrame().getByText('Is not empty').nth(1).click();
        await page.locator('iframe').first().contentFrame().getByRole('textbox', { name: 'Select element' }).click();
        await page.locator('iframe').first().contentFrame().locator('label').filter({ hasText: 'Contact - TextBox3' }).click();
        await page.locator('iframe').first().contentFrame().getByRole('textbox', { name: 'Select action' }).click();
        await page.locator('iframe').first().contentFrame().getByText('Disable').click();
        await page.locator('iframe').first().contentFrame().getByRole('button', { name: 'Add rule' }).click();
        await page.locator('iframe').first().contentFrame().locator('.rio-focus.rio-focus--inset_1px.rio-focus--border-radius_2px.rio-select-input-query').first().click();
        await page.locator('iframe').first().contentFrame().getByText('First Name - TextBox0').click();
        await page.locator('iframe').first().contentFrame().locator('.gridlayout-content > .gridlayout > .gridlayout-row > .gridlayout-column > .gridlayout-content > .rio-select-input > div > .rio-focus.rio-focus--inset_1px').first().click();
        await page.locator('iframe').first().contentFrame().getByText('Is not empty').click();
        await page.locator('iframe').first().contentFrame().getByRole('textbox', { name: 'Select element' }).click();
        await page.locator('iframe').first().contentFrame().locator('label').filter({ hasText: 'Email - TextBox2' }).click();
        await page.locator('iframe').first().contentFrame().getByRole('textbox', { name: 'Select action' }).click();
        await page.locator('iframe').first().contentFrame().locator('span').filter({ hasText: 'Set value' }).first().click();
        await page.locator('iframe').first().contentFrame().getByRole('textbox', { name: 'Enter value' }).click();
        await page.locator('iframe').first().contentFrame().getByRole('textbox', { name: 'Enter value' }).fill('balpreetSingh83@gmail.com');
        await page.locator('iframe').first().contentFrame().getByRole('button', { name: 'Add rule' }).click();
        await page.locator('iframe').first().contentFrame().locator('.rio-focus.rio-focus--inset_1px.rio-focus--border-radius_2px.rio-select-input-query').first().click();
        await page.locator('iframe').first().contentFrame().locator('span').filter({ hasText: 'Last Name - TextBox1' }).nth(2).click();
        await page.locator('iframe').first().contentFrame().getByRole('textbox', { name: 'Select condition' }).click();
        await page.locator('iframe').first().contentFrame().getByText('Is empty').click();
        await page.locator('iframe').first().contentFrame().getByRole('textbox', { name: 'Select element' }).click();
        await page.locator('iframe').first().contentFrame().locator('label').filter({ hasText: 'Email - TextBox2' }).click();
        await page.locator('iframe').first().contentFrame().locator('#Rule3').getByText('Email - TextBox2').click();
        await page.locator('iframe').first().contentFrame().getByText('Email - TextBox2').nth(1).click();
        await page.locator('iframe').first().contentFrame().locator('label').filter({ hasText: 'Email - TextBox2' }).click();
        await page.locator('iframe').first().contentFrame().getByRole('textbox', { name: 'Select action' }).click();
        await page.locator('iframe').first().contentFrame().locator('span').filter({ hasText: 'Set value' }).nth(2).click();
        await page.locator('iframe').first().contentFrame().locator('.rio-focus.rio-focus--inset_1px.rio-focus--border-radius_2px.rio-focus--has_focus > .rio-select-input-query__single-selection-query > .rio-select-input-query__input-container > .rio-select-input-query__input').fill('balpreet83@gmail.com');
        await page.locator('iframe').first().contentFrame().getByRole('button', { name: 'Clear' }).click();
        await page.locator('iframe').first().contentFrame().getByRole('textbox', { name: 'Enter value' }).click();
        await page.locator('iframe').first().contentFrame().getByRole('textbox', { name: 'Enter value' }).fill('balpreet83@gmailcom');
        await page.locator('iframe').first().contentFrame().getByRole('button', { name: 'save' }).click();
        await page.locator('iframe').first().contentFrame().getByRole('button', { name: 'preview' }).click();
        await page.locator('iframe').first().contentFrame().getByRole('button', { name: 'Apply' }).click();


    });

});