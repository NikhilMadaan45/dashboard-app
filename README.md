# Dashboard App
This is a responsive Dashboard Web Application built with React (Vite), TypeScript, and Material-UI. It features a fixed sidebar for widget selection, multiple widgets displaying simultaneously in a grid layout, and a dark/light theme toggle.

## Features
* Fixed Sidebar with gradient background and widget selection.
* Widgets: User Info, Notifications, Data Table (paginated).
* Multiple Widgets Active at Once.
* Dark/Light Theme Toggle.
* Data Fetching (mock API or local JSON).
* Fully Responsive Design.

## 🚀 Setup Instructions

### 1. Clone the repository

```git clone <repository-url> cd dashboard-app```

### 2. Install dependencies
```yarn install  # or npm install ```

### 3. Run the development server
```yarn dev  # or npm run dev```

### 4. Open the app in the browser
```http://localhost:5173/```

## 🏗️ Implementation Overview
### Tech Stack

Frontend: React (Vite), TypeScript, Material-UI.
State Management: React Context API.
Routing (Optional): React Router.
Styling: Material-UI (MUI), CSS overrides.
## Key Components

### Navbar (Sidebar)
* Contains widget selection buttons.
* Active widgets are highlighted.
* Includes a Theme Toggle Button at the bottom.
### Widgets

1. User Info Widget
* Displays user avatar, name, email, and bio.
* Adapts text color based on the theme.

2. Notifications Widget
* Lists recent notifications.
* Ensures text is readable in both themes.

3. Data Table Widget
* Fetches and displays data in a table format.
* Supports pagination.

### Theme Toggle
* Stored in React Context.
* Dynamically switches light/dark mode.
* Updates background, text colors, and UI elements accordingly.

### Grid Layout (Replaces Modal)
* Material-UI Grid v2 is used instead of a modal.
* Ensures multiple widgets appear in a structured layout.
* Widgets have equal height and width for consistency.
