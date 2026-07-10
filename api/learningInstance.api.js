const ApiClient = require("./apiClient");

class LearningInstanceAPI {
    constructor(token) {
        this.apiClient = new ApiClient(
            process.env.AA_BASE_URL,
            token
        );
    }

    async checkAvailability(name) {
        const apiContext = await this.apiClient.getContext();

        return await apiContext.get(
            `/cognitive/v3/learninginstances/checkavailability/${name}`
        );
    }

    async createLearningInstance(payload) {
        const apiContext = await this.apiClient.getContext();

        return await apiContext.post(
            "/cognitive/v3/learninginstances",
            {
                data: payload
            }
        );
    }

    async listLearningInstances() {
        const apiContext = await this.apiClient.getContext();

        return await apiContext.post(
            "/cognitive/v3/learninginstances/list",
            {
                data: {
                    filter: {
                        operator: "and",
                        operands: []
                    },
                    sort: [],
                    page: {
                        offset: 0,
                        length: 100
                    }
                }
            }
        );
    }
}

module.exports = LearningInstanceAPI;