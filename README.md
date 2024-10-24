# My First Website Project

This is my first website project, containing the frontend-only implementation. The project is built using Vue3 and related technologies, and I have also set up an automated deployment script. Every time I push changes to the repository, GitHub Actions automatically runs the script to deploy the project. The deployed content is available via GitHub Pages.

## Tech Stack

- **Vue 3**: Used for building reactive and modular user interfaces.
- **Vue Router**: Handles the routing for the multi-page application.
- **Vuex**: State management for sharing data between components.
- **Naive UI**: A modern and elegant UI component library for Vue.
- **JavaScript**: Core language for handling the logic and functionality.

## Project Structure

```bash
├── public            # Public assets
├── src               # Source code
│   ├── assets        # Static resources used in the project
│   ├── components    # Reusable Vue components
│   ├── router        # Routing configuration
│   ├── store         # Vuex store for state management
│   ├── views         # Page components
│   ├── App.vue       # Root component
│   ├── main.js       # Entry file
└── index.html        # HTML template
```

## Automated Deployment

The project integrates GitHub Actions for automatic deployment. Every time code is pushed to the main branch, the following process is triggered:

1. Install dependencies: `npm install`
2. Build the project: `npm run build`
3. Deploy the built files from the `dist` directory to GitHub Pages.

## View the Website

You can access the deployed website via the following link: [Click here](https://yehruei.github.io/Magnet---Build-Your-First-Website)

## How to Run the Project

Clone the repository:

```bash
git clone https://github.com/yehruei/Magnet---Build-Your-First-Website.git
```

Navigate to the project directory and install dependencies:

```bash
cd Magnet---Build-Your-First-Website
npm install
```

Run the project locally:

```bash
npm run dev
```
