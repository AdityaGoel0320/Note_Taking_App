# Note Taking Application

## Overview

The Note Taking Application is a web-based app designed to help users manage their notes effectively. It offers features such as local storage, live searching, pagination, routing, data and prop handling, and a clean, user-centric UI. Each note includes a timestamp to track when it was created or updated.

## Live Link 
https://note-taking-app-ebon.vercel.app/

## Features

- **Local Storage**: Notes are stored locally in the browser's storage, ensuring that data persists between sessions.
- **Live Searching**: Users can search through their notes in real-time, with results updating dynamically as they type.
- **Pagination**: Efficiently handles large sets of notes with pagination to avoid overwhelming users with too much data at once.
- **Routing**: Provides navigation through different routes, including note details, adding, and editing notes.
- **Data and Prop Handling**: Manages data and props effectively to ensure smooth operations and interactions within the application.
- **Optimized UI**: Features a clean and user-centric interface with intuitive design elements.
- **Timestamps**: Each note includes a timestamp showing when it was created or last updated.

## Technologies Used

- **React**: Frontend library for building the user interface.
- **React Router**: For handling routing and navigation.
- **Local Storage**: To persist notes data across sessions.
- **Tailwind CSS**: For styling the application with a clean and responsive design.
- **React Toastify**: For displaying notifications.

## Installation

To get started with the project, follow these steps:

1. **Clone the Repository**

    ```bash
    git clone https://github.com/AdityaGoel0320/Note_Taking_App.git
    ```

2. **Navigate to the Project Directory**

    ```bash
    cd folder-name
    ```

3. **Install Dependencies**

    ```bash
    npm install
    ```

4. **Start the Development Server**

    ```bash
    npm start
    ```





## Live Link 
https://note-taking-app-ebon.vercel.app/

## Usage

1. **Adding a Note**
   - Navigate to the "Add Note" page and fill out the title and content fields.
   - Click the "Save Note" button to add the note.

2. **Viewing Notes**
   - The main page displays a list of all notes.
   - Click on a note to view its details, including the title, content, and timestamp.

3. **Editing a Note**
   - Navigate to the "Edit Note" page to modify an existing note.
   - Update the title and/or content and click "Save Note" to apply changes.

4. **Deleting a Note**
   - Click the delete icon next to a note to remove it from the list.

5. **Searching Notes**
   - Use the search input to filter notes based on title or content.

## Folder Structure

- **`/components`**: Contains React components such as `NoteForm`, `NoteList`, `NoteDetail`, and `NoteItem`.
- **`/index.css`**: Contains global CSS styles and Tailwind configurations.
- **`/App.js`**: The main application component handling routing and state management.


## Live Link 
https://note-taking-app-ebon.vercel.app/