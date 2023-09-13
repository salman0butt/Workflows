# Workflow Management App

This is a React/Node-based workflow management application that allows users to create and edit workflows. Below are the instructions for setting up and running the app in different environments.

## Development Environment

To run the app in a development environment, follow these steps:

1. Clone the Git repository to your local machine:

   ```
   git clone https://github.com/salman0butt/Workflows.git
   ```

2. Navigate to the project directory:

   ```
   cd frontend
   ```
   
   ```
   cd backend
   ```

3. Install dependencies using npm or yarn:

   ```
   npm install
   ```

   or

   ```
   yarn install
   ```

4. Start the development server:

1. Navigate to frontend directory:
   ```
   npm run dev
   ```

   The app will be available at `http://localhost:5173` in your web browser. 

1. Navigate to backend directory:
   ```
   npm run start
   ```

   The app will be available at `http://localhost:3001` in your web browser.

## Production Environment

To deploy the app to a production environment, use the following steps:

1. Build the production bundle:

1. Navigate to frontend directory:

   ```
   npm run build
   ```

2. Set the necessary environment variables for production, including API keys database configurations.
 .env should have this DB_URL variable to define the local or remote database
3. Deploy the app to your chosen hosting platform, such as Heroku, Netlify, or AWS. Refer to the hosting platform's documentation for specific deployment instructions.

## Running All Tests

To run all the tests in your project, execute the following command:

```bash
npm test
```

## External Dependencies

This project relies on the following external dependencies:

- React: Used as the core library for building the user interface.
- Vite: Used to install React
- React Router: Used for client-side routing.
- React Testing Library & Jest: Used for testing.
- Ant Design: Provides UI components for the application.
- express.js framwrok for backend API's

These dependencies were chosen for their popularity, community support, and features that simplify development.

## Continuous Integration and Testing

Continuous integration is implemented using GitHub Actions. On every push to the repository, the CI/CD pipeline runs unit tests and deploys the app to the production environment if all tests pass.

```yml
name: CI/CD Pipeline

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: 14

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Test
        run: npm test

  deploy:
    needs: build
    runs-on: ubuntu-latest

    steps:
      - name: Deploy to Production
        run: |
          # Add your deployment commands here

```

## Decisions Made

- **Routing**: React Router was chosen for client-side routing to maintain a single-page application experience and improve user navigation.

- **Styling**: Ant Design was selected for its extensive set of pre-designed components, saving development time and maintaining a consistent UI design.

