# Project Tittle : Mark-z_ToDoApp

## Group Information:
   - **Student1 :** Mohamed Musadique Zaffraj Suzanee - ITBIN-2313-0113 - Role: Devops Engineer 
   - **Student2 :** Ravindya Shaw - ITBIN-2313-0108 - Role: Backend Developer
   - **Student1 :** Chamudi Thamasha- ITBIN-2313-0114 - Role: Frontend Developer
   - **Student1 :** Rashmi Sewmini - ITBIN-2313-0106 - Role: Technical content engineer

## Project Description:
   Mark-z_ToDoApp is the simple task management application that allows users to add, delete, and mark complete tasks. And also users filter their tasks under the all, active, and completed categories.It includes task counter and simple local storage with responsive UI design.It manages users daily tasks efficiently.

   The project demonstrates advanced Git practices and CI/CD implementation using Github Actions with automatic deployment to Vercel.

## Live Deployment:
   **Live URL:** [https://mark-z-to-do-app.vercel.app/]

## Technologies Used:
   - HTML5, CSS3, JavaScript
   - Node.js
   - Git and GitHub
   - GitHub Actions (CI/CD)
   - Vercel(Deployment platform)

## Features:
   - Add, delete, mark as completed the tasks.
   - Responsive user interfaces
   - Automated CI/CD pipeline
   - Automatic deployment on branch updates
   - Simple RESTful API structure using standard HTTP methods
   - Organized backend with controllers, routes, server files

## API Documentation:
   - The Project has a simple RESTful API for managing ToDo functions.It supports add, read, deleting todos using standard HTTP methods. All data is stored in-memory and returned as JSON, making it easy to test locally.

## Backend Documentation:
   - The backend is built with Node.js and organized with controllers, routes, and server files. It handles API requests from the frontend and manages tosos in-memory. The structure allows easy development and testing without a database.

## Branch Strategy:
   We implemented the following branching strategy:
   - `main` - Production branch
   - `develop` - Integration branch
   - `feature/*` - Feature development branches

## Individual Contributions

   ### Mohamed Musadique Zaffraj Suzanee [ITBIN-2313-0113]
   - Repository setup and configuration
   - GitHub Actions CI/CD pipeline implementation
   - Deployment setup and management
   - Create feature/project-setup for handle workflow configuration (CI pipeline)
   - Create feature/backend-project for handle some missing backend components and resolve run-time errors
   - Handle conflicts during the merging processes

   ### Ravindya Shaw [ITBIN-2313-0108]
   - Create feature/login-ravindya for contribute the backend authentication with good functionality
   - Ensured backend code followed proper standards and best practices
   - Handled code quality issues during error occurrences and debugging
   - Reviewing
   - commits when adding codes and fixing bugs.

   ### Chamudi Thamasha [ITBIN-2313-0114]
   - Create feature-chamudi-code-html for contribute the frontend UI functionality
   - Developed and improved frontend components with proper structure
   - Created UI-related documentation explaining page flow and components
   - Handle the code quality during the time of error  occurrence
   - commits when adding codes and fixing bugs.
   
   ### Rashmi Sewmini [ITBIN-2313-0106]
   - Prepared and structured the README.md file for the project
   - Documented project architecture (frontend–backend interaction flow)
   - Added detailed local development setup instructions (Node.js, dependencies)

## Setup Instructions

   ### Prerequisites
   - Node.js (version 18 or higher)
   - Git

   ### Installation
   ```bash
     # Clone the repository
     git clone [https://github.com/Zaffraj-Suzanee/Mark-z_ToDoApp.git]

# Navigate to project directory
cd [Mark-z_ToDoApp]

# Install dependencies
npm install

# Run development server
npm run dev

# Deployment Process
    The project uses a CI/CD pipeline implemented with GitHub Actions to automate the build, test, and deployment process.When a developer pushes code or creates a pull request to the develop or main branch, the CI pipeline is automatically triggered. The pipeline installs project dependencies, checks for build errors, and validates the application to ensure code quality and stability.

    Once the code passes all CI stages and is merged into the main branch, the CD process deploys the application to the cloud hosting platform (Vercel). The deployment is fully automated, ensuring that the latest stable version of the application is always available in the production environment.

    Environment variables and secrets (such as deployment tokens) are securely managed using GitHub Secrets, preventing sensitive information from being exposed in the repository.This automated deployment process reduces manual errors, ensures consistency across environments, and enables faster and more reliable releases.

# Deployment & Testing Strategy
   The application was deployed using Vercel with GitHub integration.During development, all features were tested on the develop branch using Vercel preview deployments to ensure stability before production release.

   No custom Vercel configuration files (vercel.json, .vercelignore) were required, as the default Vercel setup fully supported the project structure and build process.After successful testing and verification, the develop branch was merged into main, which triggered the production deployment automatically via the CI/CD pipeline.

# Challenges Faced
   - Merge conflicts during branch integration
   - Backend frontend connection problems
   - There were issues when we tried to deploy

# Build Status
   ![CI Pipeline](https://github.com/Zaffraj-Suzanee/Mark-z_ToDoApp/workflows/CI%20Pipeline/badge.svg)
   ![Deploy](https://github.com/Zaffraj-Suzanee/Mark-z_ToDoApp/workflows/Deploy%20to%20Production/badge.svg)

## 📝 Step-by-Step Implementation Guide

  ### Phase 1: Setup (0-15 minutes)

   #### Step 1: Team Formation & Planning
   1. Form team 
   2. Assign roles based on strengths
   3. Choose our project type
   4. Decide on features to implement

   #### Step 2: Repository Creation (DevOps Engineer)
   1. Go to GitHub.com and sign in
   2. Click "New Repository"
   3. Name: `[Mark-z_ToDoApp]-DEVOPS-PROJECTS`
   4. Description: "Advanced Git & DevOps Assignment - [Group Number-5]"
   5. Select **PUBLIC**
   6. Initialize with README: **NO** (we'll create our own)
   7. Click "Create Repository"

   #### Step 3: Add Collaborators
   1. Go to Settings → Collaborators
   2. Add all team members by GitHub username
   3. Each member should accept the invitation

   #### Step 4: Clone Repository (All Members)
   ```bash
   git clone https://github.com/Zaffraj-Suzanee/Mark-z_ToDoApp.git
   cd Mark-z_ToDoApp

#### Step 5: Initial Setup (DevOps Engineer)
   # Create initial files
   touch README.md .gitignore

   # Create branch structure
   git checkout -b develop
   git push -u origin develop

   # Create GitHub Actions directory
   mkdir -p .github/workflows

   # Add initial commit
   git add .
   git commit -m "chore: initial repository setup"
   git push origin develop

   ### Phase 2: Development (15-75 minutes)
   Step 6: Create Feature Branches (Each Developer)
   Each team member should:
   # Update local repository
   git checkout develop
   git pull origin develop

   # Create your feature branch
   git checkout -b feature/[feature-name]

   # Example:
   # git checkout -b feature/Project-Setup
   # git checkout -b feature/login-ravindya
   # git checkout -b feature/backend-project

   Step 7: Develop Your Features (Each Developer)
   Guidelines for commits:
   Commit frequently (every significant change)
   Write meaningful commit messages
   Follow commit message conventions:
          feat: new feature
          fix: bug fix
          docs: documentation changes
          style: formatting changes
          refactor: code refactoring
          test: adding tests
          chore: maintenance tasks

Example workflow:
# Make changes to your files

# Check status
git status

# Add files
git add .

# Commit with meaningful message
git commit -m "feat: add homepage hero section"

# Push to your feature branch
git push origin feature/[feature-name]

Step 8: Create Pull Requests (Each Developer)
Go to GitHub repository

Click "Pull Requests" → "New Pull Request"
Base: develop ← Compare: feature/[feature-name]
Title: Clear description of what you've done
Description: Detail the changes, any issues encountered
Assign reviewers (your team members)
Create Pull Request

Pull Request Template:

  ## Description
  This PR fixes merging and deployment issues and improves app functionality.
 
## Changes Made
- Fixed errors
- Updated configuration
- Improved deployment setup

## Testing
- Tested locally
- No console errors
- Responsive on mobile

Step 9: Code Review & Merge (All Members)

Reviewers should:
1. Check the code quality
2. Test the changes locally
3. Leave comments or approve
4. The DevOps Engineer handles the final merge

Merging process:

# Switch to develop
git checkout develop

# Merge feature branch (after PR approval)
git merge feature/[feature-name] --no-ff

# Push to remote
git push origin develop

Phase 3: CI/CD Setup (45-75 minutes)

Step 10: GitHub Actions Configuration (DevOps Engineer)

Create CI Workflow:
1. Create file: .github/workflows/ci.yml
2. Add the CI configuration 
3. Commit and push:
  git add .github/workflows/ci.yml
  git commit -m "ci: add CI pipeline workflow"
  git push origin develop

Create Deployment Workflow:
1. Create file: .github/workflows/deploy.yml
2. Add the deployment configuration
3. Commit and push

Step 11: Cloud Deployment Setup
Option A: Vercel 
Setup Steps:
1. Go to vercel.com
1. Sign up with GitHub (FREE, no credit card required)
3. Click "Add New Project"
4. Import your GitHub repository
5. Configure:
   Framework Preset: (Auto-detect or select)
   Root Directory: ./ or ./src
   Build Command: npm run build (or leave default)
   Output Directory: dist or build (or leave default)
6. Click "Deploy"

Get Deployment Token for GitHub Actions:
1. Go to Vercel Account Settings → Tokens
2. Create new token: "GitHub Actions Token"
3. Copy the token
4. Go to GitHub repo → Settings → Secrets and Variables → Actions
5. Add secrets:
VERCEL_TOKEN: [your token]
ORG_ID: Found in Vercel project settings
PROJECT_ID: Found in Vercel project settings

Note: We use vercel platform for deployment

Option B: Netlify
Setup Steps:
1. Go to netlify.com
2. Sign up with GitHub (FREE, no credit card)
3. Click "Add new site" → "Import an existing project"
4. Choose GitHub and select your repository
5. Configure:
Build command: npm run build
Publish directory: dist or build
6. Click "Deploy"

Automatic Deployment:
Netlify auto-deploys on push to main
No additional configuration needed for basic setup

Option C: Render
Setup Steps:
1. Go to render.com
2. Sign up with GitHub (FREE, no credit card)
3. Click "New" → "Static Site"
4. Connect your GitHub repository
5. Configure:
Name: Your project name
Branch: main
Build Command: npm run build
Publish Directory: dist or build
6. Create Static Site

Phase 4: Finalisation (75-100 minutes)

Step 12: Merge to Main (DevOps Engineer)
# Ensure all features are merged to develop
git checkout develop
git pull origin develop

# Create Pull Request from develop to main on GitHub
# After approval, merge to main
git checkout main
git merge develop
git push origin main



