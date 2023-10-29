# Project Management Dashboard

A comprehensive solution that caters to businesses looking to manage their projects, teams, and user accounts, seamlessly integrating frontend and backend functionalities.

## Features:

1. **User Management**: Handle user login, validation, creation, and modifications to profiles, credentials, and user status.
2. **Announcements**: Allows for the addition and updating of important announcements.
3. **Company Overview**: View all companies, their associated users, announcements, and teams, alongside project data nested under teams.
4. **Projects**: A duplicate functionality to the company's projects, but focusing specifically on project creation, editing, and retrieval by team.
5. **Teams**: Create, modify, and retrieve team information including its associated members.

## Backend API Endpoints:

### User:

- **Login**: `POST /login`
- **Get User**: `GET /{username}`
- **Validate User**: `POST /validate`
- **Create User**: `POST /new`
- **Edit User Profile**: `PATCH /{username}/profile`
- **Edit User Credentials**: `PATCH /{username}/credentials`
- **Edit User Admin Status**: `PATCH /{username}/admin/{adminStatus}`
- **Edit User Active Status**: `PATCH /{username}/active/{activeStatus}`

### Announcements:

- **Add Announcement**: `POST /add`
- **Update Announcement**: `PATCH /update/{id}`

### Companies:

- **Get All Companies**: `GET /`
- **Get Company Users**: `GET /{id}/users`
- **Get Company Announcements**: `GET /{id}/announcements`
- **Get Company Teams**: `GET /{id}/teams`
- **Get All Projects by Team**: `GET /{companyId}/teams/{teamId}/projects`
- **Add User to Company**: `POST /{id}/users/{username}`

### Projects:

- **Get All Projects by Team (Duplicate)**: `GET /{companyId}/teams/{teamId}/projects/team`
- **Add Project to Team**: `POST /{companyId}/teams/{teamId}/projects`
- **Edit Project**: `PATCH /{companyId}/teams/{teamId}/projects/{projectId}`

### Teams:

- **Create Team**: `POST /`
- **Edit Team by ID**: `PATCH /{teamId}`
- **Get All Team Members**: `GET /{id}/users`
- **Get Team Information**: `GET /{id}`

### Backend Tech Stack:

**Language**: Java
**Framework**: Spring Boot
**Database**: PostgreSQL

## Frontend Features:

### User Interface:

- **Login & Registration**: Clean and user-friendly forms with validation feedback.
- **Dashboard**: Overview of projects, teams, and announcements.
- **User Profiles**: Detailed view and editing functionalities for user data.
- **Announcements**: A dedicated section for viewing and managing announcements.
- **Company & Teams**: Interactive lists and forms for company and team-related operations.
- **Projects**: Visual representation of projects with capabilities to add, edit, and manage.

### Frontend Tech Stack:

- **Framework**: Angular
- **Styling**: Bootstrap, CSS
- **Development Tools**: TypeScript, HTML, CSS, VS Code
- **State Management**: Angular Services singleton

## Getting Started:

### Prerequisites

Ensure you have the following setup:

- **PostgreSQL** running on port `5432`
  - **Username:** `postgres`
  - **Password:** `bondstone`

### Installation and Running

1. Navigate to /frontend
2. Run `npm install` to install necessary frontend dependencies
3. Navigate to root directory
4. Run `npm install` to install necessary root dependency
5. Run `npm start` to run both server and frontend
