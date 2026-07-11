import { test as base } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage.js';
import { DashboardPage } from '../pages/DashboardPage.js';
import { FormBuilderPage } from '../pages/FormBuilderPage.js';
import { CreateFormDialog } from "../pages/CreateFormDialog.js";

export const test = base.extend({

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    dashboardPage: async ({ page }, use) => {
        await use(new DashboardPage(page));
    },

    createFormDialog: async ({ page }, use) => {
        await use(new CreateFormDialog(page));
    },

    formBuilderPage: async ({ page }, use) => {
        await use(new FormBuilderPage(page));
    },
});

export const expect = test.expect;