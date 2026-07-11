# Automation Anywhere SDET Assignment

This repository contains the Playwright automation solution for the Automation Anywhere SDET Assignment. It includes both the UI automation for the Form Builder workflow and the API automation for the Learning Instance workflow.

The project is built with Playwright and JavaScript using the Page Object Model (POM) architecture, reusable fixtures, and modular API clients.

## Tech Stack

- Playwright
- JavaScript (ES6)
- Node.js
- Page Object Model (POM)
- Playwright Fixtures
- Dotenv
- HTML Reporter

## Prerequisites

Before running the automation, make sure the following are installed:

- Node.js 18 or higher
- npm
- Playwright browsers

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Balpreet1003/automation-anywhere-assignment.git
cd Automation_Anywhere_Assignment
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

## Environment Variables

Create a `.env` file in the project root.

```text
EMAIL=your_email
PASSWORD=your_password
BASE_URL=https://community.cloud.automationanywhere.digital/
HEADLESS=false

```

## Project Structure

```text
Automation_Anywhere_Assignment/
├── components/
│   ├── Canvas.js
│   ├── Toolbox.js
│   ├── PropertiesPanel.js
│   ├── RulesPanel.js
│   └── RuleCard.js
├── pages/
│   ├── BasePage.js
│   ├── LoginPage.js
│   ├── DashboardPage.js
│   ├── CreateFormDialog.js
│   └── FormBuilderPage.js
├── tests/
│   ├── api/
│   │   └── learningInstance.spec.js
│   └── ui/
│       └── formBuilder.spec.js
├── fixtures/
│   └── testFixture.js
├── api/
│   ├── apiClient.js
│   ├── auth.api.js
│   └── learningInstance.api.js
├── test-data/
│   └── learningInstancePayload.json
├── utils/
│   ├── constants.js
│   ├── helper.js
│   ├── locatorUtils.js
│   └── logger.js
├── playwright.config.js
├── package.json
├── .env
└── README.md
```

## Framework Design

The framework follows the Page Object Model architecture.

### Pages

Pages contain high-level interactions for complete UI flows.

Examples:

- Login Page
- Dashboard Page
- Form Builder Page

### Components

Components contain reusable UI modules that are shared across the page objects.

Examples:

- Toolbox
- Canvas
- Rules Panel
- Rule Card
- Properties Panel

### Fixtures

Fixtures provide dependency injection for page objects so tests stay clean and readable.

Example:

```javascript
test("Create Form", async ({
    loginPage,
    dashboardPage,
    formBuilderPage
}) => {

});
```

### Utilities

Utilities contain reusable helper functions such as:

- Unique form name generator
- Common helper methods

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run UI tests only:

```bash
npx playwright test tests/ui
```

Run the Form Builder test specifically:

```bash
npx playwright test tests/ui/formBuilder.spec.js
```

Run the API test specifically:

```bash
npx playwright test tests/api/learningInstance.spec.js
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run tests in debug mode:

```bash
npx playwright test --debug
```

## Playwright Reports

Open the HTML report:

```bash
npx playwright show-report
```

## Task 1: UI Automation

### Overview

This task contains the UI automation solution for the Automation Anywhere SDET Assignment.

The automation framework validates the complete Form Builder workflow, including creating a new form, configuring form elements, navigating to the Rules Builder, creating rules, adding conditions and actions, and saving the form.

### Implementation Details

The UI automation follows the Page Object Model structure.

High-level flow:

```text
LoginPage
    ↓
DashboardPage
    ↓
CreateFormDialog
    ↓
FormBuilderPage
       ↓
 ├── Toolbox
 ├── Canvas
 ├── PropertiesPanel
 ├── RulesPanel
 └── RuleCard
```

The UI tests are located under `tests/ui/` and use the reusable page objects in `pages/`, reusable components in `components/`, fixtures in `fixtures/`, and helper methods in `utils/`.

### Workflow Implemented

The following workflow is automated in the UI assignment:

1. Navigate to Community Edition.
2. Login with valid credentials.
3. Navigate to Automation.
4. Create a new form.
5. Enter the form name and description.
6. Drag and drop TextBox components onto the canvas.
7. Configure textbox properties such as label, hint text, tooltip, default value, minimum length, and maximum length.
8. Navigate to the Rules Builder.
9. Click Add Rule.
10. Create Rule1.
11. Verify the Rule Card is displayed and expanded.
12. Add conditions and actions.
13. Save the form.

### Assertions Implemented

The UI automation verifies the following:

#### Form Builder

- Form created successfully
- TextBoxes added successfully
- Property panel displayed
- TextBox properties configured

#### Rules Builder

- Form Rules tab opens successfully
- Add Rule button is visible
- Rule card is created
- Rule card is expanded
- Rule name updated correctly
- Add Condition button is visible
- Add Action button is visible
- Rules panel displayed successfully

### Successfully Implemented

- Login automation
- Form creation
- Drag and drop automation
- Property configuration
- Rules Builder navigation
- Add Rule automation
- Rule card validation
- Rule expansion validation
- Rule renaming
- Save form automation

### Features

- Reusable page objects
- Clean code structure
- Component-based architecture
- Easy maintenance
- Scalable automation framework
- Environment-based configuration
- HTML reporting
- Screenshot capture on failure
- Video recording on failure
- Trace generation for debugging

### Assumptions

- Valid Automation Anywhere credentials are available.
- User has permission to create forms.
- Required UI elements are available in the current Community Edition.
- Stable internet connection is available.

## Task 2: API Automation

### Overview

This task contains the API automation solution developed as part of the Automation Anywhere assignment.

The objective is to automate the Learning Instance creation workflow using Playwright API Testing.

The automation performs the following operations:

- Authenticate with the Automation Anywhere API
- Generate an authentication token
- Create a new Learning Instance for the Invoice document type
- Retrieve all Learning Instances
- Validate that the newly created Learning Instance exists
- Verify all expected API responses using assertions

### Framework Design

The API framework follows a modular API Object design.

#### apiClient.js

Responsible for:

- Creating a Playwright API request context
- Configuring the base URL
- Adding required HTTP headers
- Passing the authentication token

#### auth.api.js

Responsible for:

- Authenticating using the Automation Anywhere authentication API
- Returning the authentication token
- Returning the response status

Endpoint:

```text
POST /v2/authentication
```

#### learningInstance.api.js

Responsible for:

```text
GET /cognitive/v3/learninginstances/checkavailability/{name}
POST /cognitive/v3/learninginstances
POST /cognitive/v3/learninginstances/list
```

#### learningInstance.spec.js

Contains the complete API test flow.

Workflow:

```text
Authenticate
      ↓
Generate Token
      ↓
Create Learning Instance
      ↓
Retrieve Learning Instances
      ↓
Validate Created Learning Instance
```

### API Endpoints Used

#### Authentication

```text
POST /v2/authentication
```

#### Create Learning Instance

```text
POST /cognitive/v3/learninginstances
```

#### List Learning Instances

```text
POST /cognitive/v3/learninginstances/list
```

### Test Data

Learning Instance payload is stored separately inside `test-data/` so the test remains independent from the API implementation.

To avoid duplicate Learning Instance names, the test generates a unique name using:

```javascript
Playwright_Invoice_${Date.now()}
```

before sending the create request.

### Assertions Implemented

The API automation verifies the following:

#### Authentication

- Status code is 200
- Authentication token is returned

#### Learning Instance Creation

- Status code is 200
- Learning Instance ID is generated
- Learning Instance name matches the request payload

#### Validation

- Learning Instance list API returns status 200
- Newly created Learning Instance exists
- Learning Instance name matches the expected value

### Authentication Notes

Automation Anywhere uses an encrypted password for authentication.

Instead of sending the plain password, the application encrypts the password before calling `/v2/authentication`.

### Assumptions

- User has access to Automation Anywhere Community Edition.
- API endpoints remain unchanged.
- Authentication token is valid.
- Invoice domain is available.
- Required permissions exist for creating Learning Instances.

### Design Decisions

- Reusable API client
- Separate API layer
- Separate test layer
- Environment variable support
- External test data
- Dynamic Learning Instance name
- Minimal code duplication
- Modular framework

### Expected Result

Successful execution should produce:

```text
✓ 1 passed
```

The HTML report can be generated using:

```bash
npx playwright show-report
```

## Project Highlights

- Built using modern Playwright architecture
- Component-based Page Object Model
- Highly reusable automation methods
- Modular and scalable codebase
- Easy to maintain and extend
- Production-style automation framework
