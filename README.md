# medical-app

React Microfrontends POC - every app is React SPA
**Important part**: each app should be placed in the separated repository in order to work 100% independently
In this repository for the sake of convenience - I'm using one repository with folders per remote

## The application will be initially splited into 3 domains
* doctors
* appointments
* diagnostics tests

Host managing the remotes, and each remote is single app which can be developed by separated team.

## Setup

1. navigate to the root of project and run `npm install`
2. then simply run `npm run start` command to run every app on dedicated port