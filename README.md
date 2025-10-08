# 6704101355-Pongsakorn-Kaewdam

Final Exam - Software Engineering (October 8, 2025)

## Project Overview

This is a Quasar Vue.js application created for the Software Engineering final exam. The project demonstrates:

1. **Version Control** - Git repository with proper branching strategy
2. **Playwright Testing** - End-to-end testing for form validation
3. **CI/CD** - GitHub Actions workflow for automated deployment

## Branches

- `master` - Main production branch
- `testing` - Playwright testing implementation
- `cicd` - CI/CD configuration and GitHub Actions

## Features

- Basic form with validation (Name, Age, Terms acceptance)
- Quasar UI components
- Responsive design
- Form validation with error messages
- Reset functionality

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Testing

```bash
# Run Playwright tests
npm run test:e2e

# Run tests with UI
npm run test:e2e:ui
```

### Build

```bash
npm run build
```

## Deployment

The application is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the `master` branch.

## Project Structure

```
src/
├── pages/
│   └── IndexPage.vue    # Main form page
├── layouts/
├── components/
└── router/

tests/
└── example.spec.ts      # Playwright test file

.github/
└── workflows/
    └── deploy.yml       # GitHub Actions workflow
```

## Exam Requirements Completed

✅ **Version Control (50 points)**
- Created Quasar application with proper naming
- Set up Git repository
- Made 3 commits as required
- Modified IndexPage.vue and quasar.config.ts

✅ **Playwright Testing (40 points)**
- Created testing branch
- Installed and configured Playwright
- Created comprehensive form tests
- Made required commits

✅ **CI/CD (30 points)**
- Created cicd branch
- Configured GitHub Actions workflow
- Set up automated deployment to GitHub Pages

## Live Demo

The application is deployed at: https://[username].github.io/6704101355-Pongsakorn-Kaewdam/

## Author

**Pongsakorn Kaewdam**  
Student ID: 6704101355  
Email: 6704101355@student.chula.ac.th
