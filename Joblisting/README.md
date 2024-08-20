
# Job Listing Application

This project is a job listing application built using Next.js, React, and Tailwind CSS. The application displays job listings with detailed descriptions and requirements. This README provides an overview of the project and guides you through the steps to set it up and run it locally.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Task Series](#task-series)
  - [Task 6: Building Job Listing Application](#task-6-building-job-listing-application)
  - [Task 7: Integrating API Data into the Application](#task-7-integrating-api-data-into-the-application)
  - [Task 8: User Authentication](#task-8-user-authentication)
  - [Task 9: Implementing Bookmark Functionality and Testing](#task-9-implementing-bookmark-functionality-and-testing)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)

## Features

- Job listings with detailed descriptions
- Display of responsibilities, ideal candidate traits, and event information
- Categories and required skills for each job
- Avatar images for each job listing
- Job listing dashboard styled with Tailwind CSS
- User authentication with signup and signin functionality
- Bookmark functionality to save job positions

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or later)
- npm (v6 or later)

## Getting Started

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/job-listing-app.git
    cd job-listing-app
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Run the development server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Task Series

### Task 6: Building Job Listing Application

**Objective:**

Create a React component for a job card and populate it with dummy data. Additionally, create the Job Listing Dashboard.

**Steps:**

1. **Design the Card:**
   - Create a React component that visually represents the job card based on the provided design.
   - Pay attention to layout, colors, and typography.

2. **Use the Given JSON Data:**
   - Populate the card with the provided dummy data.
   - Example JSON data is available in the `JobData.ts` file.

3. **Add Avatar Image:**
   - Use the provided avatar image URL to incorporate an avatar image into the card.
   - Ensure proper display within the designated area of the card.

4. **Create the Applicants Dashboard:**
   - Use Tailwind CSS to style the job description and other details.

### Task 7: Integrating API Data into the Application

**Objective:**

Integrate data from a provided API endpoint into your application and populate the cards with this fetched data.

**Steps:**

1. **Checkout API Endpoint:**
   - Navigate to the provided API endpoint.
   - Familiarize yourself with the structure of the data returned by the endpoint, including the fields and format.

2. **Fetch Data from Endpoint:**
   - Implement a function to fetch data from the API endpoint.
   - Use methods like `fetch()` or libraries like Axios to make an HTTP request.
   - Ensure the fetched data is an array of objects to populate the cards.

3. **Populate Cards with Fetched Data:**
   - Replace the existing dummy data with the fetched data.
   - Display relevant information from the fetched data within each card.

4. **Reach Out for Assistance:**
   - If challenges arise, reach out to mentors for guidance and support.

**API Endpoint:**
- Documentation: [Postman API Documentation](https://documenter.getpostman.com/view/27955515/2sA3rwMEUX)
- Base URL: `https://akil-backend.onrender.com/`

### Task 8: User Authentication

**Objective:**

Implement authentication functionality using NextAuth in your application, including signup and signin pages, and integrate with provided API endpoints for user registration and authentication.

**Steps:**

1. **Design Signup and Signin Pages:**
   - Create pages/components for user signup and signin.
   - Design these pages with attention to layout, forms, and user interaction.

2. **Implement Signup Logic:**
   - Use the provided signup endpoint to implement signup logic.
   - Capture input data and send a POST request to the signup endpoint.
   - Handle server responses, displaying error messages or success notifications.

3. **Implement Sign In Logic:**
   - Use the signin endpoint to implement signin logic.
   - Capture input data and send a POST request to the signin endpoint.
   - Retrieve and store the access token securely upon successful authentication.
   - Handle authentication failures gracefully.

4. **Reach Out to Mentors for Assistance:**
   - Seek help from mentors if challenges arise during the implementation of authentication logic.

**Additional Information:**

- Securely handle sensitive user data like passwords and access tokens.
- Implement client-side validation for input fields to enhance user experience.
- Maintain clean, well-structured code, following best practices and coding conventions.

**API Endpoints:**
- Base URL: `https://akil-backend.onrender.com/`
  - **Signup**: POST `/signup`
  - **Verify Email**: POST `/verify-email`
  - **Sign In**: POST `/login`

### Task 9: Implementing Bookmark Functionality and Testing

**Objective:**

Enhance the job listing application by implementing bookmark functionality and ensuring its reliability through thorough testing.

**Steps:**

1. **Add a Bookmark Toggle Button:**
   - Modify the job position card component created in Task 6 to include a toggle button for bookmarking.
   - This toggle button should allow users to bookmark or remove a job position from their saved list.

2. **Implement Bookmark Logic:**
   - Utilize the provided endpoint to implement the logic for bookmarking a job position.
   - Ensure that only authenticated users can access the bookmark functionality.
   - When a user toggles the bookmark button, send a request to the bookmark endpoint with the necessary data.

3. **Finalize:**
   - Verify that only authenticated users can access the bookmark feature.
   - Ensure that searching job positions returns accurate results based on the title.
   - Finalize all tasks and ensure that the entire application is working correctly.

4. **Testing with Jest:**
   - Write unit tests using Jest to validate the functionality of bookmarking a job position and ensuring that the toggle button works as expected.
   - Perform component testing to validate the rendering of the job posting card and job not found card.

5. **Testing with Cypress:**
   - Write end-to-end (E2E) tests using Cypress to test the bookmark functionality from a user's perspective.
   - Create test scenarios that mimic user interactions, such as clicking on the bookmark toggle button, verifying the bookmarked status, and checking if the job position appears in the bookmarked list.
   - Include assertions to verify the correct behavior of the bookmark feature across different user flows and scenarios.

**API Endpoints:**
- Base URL: `https://akil-backend.onrender.com/`
  - **Bookmark**: POST `/bookmark`

## Screenshots

![Screenshot 2024-08-10 100137](https://github.com/user-attachments/assets/dd588486-71fa-4a25-afb3-bfb1d29f84ac)
![Screenshot 2024-08-10 100156](https://github.com/user-attachments/assets/de4de9a8-1afe-4566-a8cc-d7e7744bebca)
![Screenshot 2024-08-10 100232](https://github.com/user-attachments/assets/4cc3fd90-267f-4bd2-a8c6-2c0d5156955f)
![Screenshot 2024-08-10 100441](https://github.com/user-attachments/assets/59a52cc8-2567-4c41-b426-b9de5399090f)
![Screenshot 2024-08-10 100510](https://github.com/user-attachments/assets/f0cb89bf-5402-4cb6-8c0e-ee2f2c06691d)
![Screenshot 2024-08-14 081345](https://github.com/user-attachments/assets/f4706100-905c-4541-a6e0-a04ba746ac89)
![Screenshot 2024-08-14 081402](https://github.com/user-attachments/assets/028149f6-4d78-4a8f-bd97-679385b1e8b8)
![Screenshot 2024-08-14 080501](https://github.com/user-attachments/assets/9a207ee0-dec1-4208-9de1-136cc577cb77)
![Screenshot 2024-08-14 080623](https://github.com/user-attachments/assets/3c1125ea-db46-434e-9227-b1c38f502b0b)



## Technologies Used

- Next.js
- React
- Tailwind CSS
- TypeScript
- react-icons
- NextAuth
- Jest
- Cypress

