# Auth ToDo App

## Description

A modern To-Do List application that allows users to register, log in, create, edit, delete, and mark tasks as completed. The application features a responsive design and utilizes React for the frontend and local storage for user authentication.

## Technologies Used

- Frontend: React, Tailwind CSS
- State Management: Context API
- Form Validation: Formik, Yup
- Routing: Next.js

## Features

- User registration and authentication
- Add new tasks
- Edit existing tasks
- Mark tasks as completed
- Delete tasks
- Responsive design with modern UI
- Clear form fields after submission
- Display success and error messages appropriately

## Setup Instructions

1. **Clone the repository**:

   ```bash
   git clone https://github.com/0x5un5h1n3/auth-todo-app.git
   cd todo-list-app
   ```

2. **Install frontend dependencies**:

   ```bash
   npm install
   ```

3. **Run the application**:

   ```bash
   npm run dev
   ```

4. **Open your browser and navigate to** `http://localhost:3000`.

## Notes

- The application uses local storage to manage user authentication and tasks.
- The frontend is built with React and styled using Tailwind CSS for a modern look and feel.
- User registration and login are handled through the Context API, allowing for easy state management.
- Form validation is implemented using Formik and Yup to ensure a smooth user experience.
- The application is fully responsive, ensuring it looks great on all devices.
- The edit and delete functionalities for tasks are designed to be user-friendly, with buttons that remain aligned regardless of the task description length.

## Future Improvements

- Implement a backend service to store tasks and user data persistently.
- Add sorting and filtering capabilities for tasks.
- Implement drag-and-drop functionality to reorder tasks.
- Enhance the UI with animations and transitions for a better user experience.
