export function generateUniqueFormName() {
    const now = new Date();

    const timestamp =
        now.getFullYear() +
        String(now.getMonth() + 1).padStart(2, "0") +
        String(now.getDate()).padStart(2, "0") +
        "_" +
        String(now.getHours()).padStart(2, "0") +
        String(now.getMinutes()).padStart(2, "0") +
        String(now.getSeconds()).padStart(2, "0");

    return `UI_Automation_${timestamp}`;
}

export function getConditionSwitchboard(ruleIndex, conditionIndex) {
    return this.getRule(ruleIndex).locator(
        `[data-switchboard-for="Rule${ruleIndex + 1}-Condition${conditionIndex}"]`
    );
}