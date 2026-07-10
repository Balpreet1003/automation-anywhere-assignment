const { test, expect } = require("@playwright/test");

const AuthAPI = require("../../api/auth.api");
const LearningInstanceAPI = require("../../api/learningInstance.api");

const learningInstancePayload = require("../../test-data/learningInstancePayload.json");

test.describe("Learning Instance API", () => {

    test("Create and validate Learning Instance", async () => {

        // Authenticate
        const authAPI = new AuthAPI();
        const authResponse = await authAPI.login();

        expect(authResponse.status).toBe(200);
        expect(authResponse.token).toBeTruthy();

        // Initialize Learning Instance API
        const learningInstanceAPI = new LearningInstanceAPI(authResponse.token);

        // Create a copy of the payload
        const payload = JSON.parse(
            JSON.stringify(learningInstancePayload)
        );

        // Generate a unique Learning Instance name
        payload.name = `Playwright_Invoice_${Date.now()}`;

        // Create Learning Instance
        const createResponse =
            await learningInstanceAPI.createLearningInstance(payload);

        // Replace 201 with 200 if that's what the API actually returns
        expect(createResponse.status()).toBe(200);

        const createResponseBody = await createResponse.json();

        expect(createResponseBody.id).toBeTruthy();
        expect(createResponseBody.name).toBe(payload.name);

        // List Learning Instances
        const listResponse =
            await learningInstanceAPI.listLearningInstances();

        expect(listResponse.status()).toBe(200);

        const listResponseBody = await listResponse.json();

        const learningInstance = listResponseBody.list.find(
            instance => instance.name === payload.name
        );

        expect(learningInstance).toBeDefined();
        expect(learningInstance.name).toBe(payload.name);

    });

});