const { request } = require("@playwright/test");

class ApiClient {
    constructor(baseURL, token = null) {
        this.baseURL = baseURL;
        this.token = token;
    }

    async getContext() {
        return await request.newContext({
            baseURL: this.baseURL,
            extraHTTPHeaders: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                ...(this.token && {
                    "x-authorization": this.token
                })
            }
        });
    }
}

module.exports = ApiClient;