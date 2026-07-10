const ApiClient = require("./apiClient");

class AuthAPI {
    constructor() {
        this.apiClient = new ApiClient(process.env.AA_BASE_URL);
    }

    async login() {
        const apiContext = await this.apiClient.getContext();

        const response = await apiContext.post("/v2/authentication", {
            data: {
                username: process.env.AA_USERNAME,
                password: process.env.AA_ENCRYPTED_PASSWORD,
                captcha: {}
            }
        });

        console.log("Status:", response.status());

        const responseBody = await response.json();

        await apiContext.dispose();

        return {
            status: response.status(),
            token: responseBody.token,
            responseBody
        };
    }
}

module.exports = AuthAPI;