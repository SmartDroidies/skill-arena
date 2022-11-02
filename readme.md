# Skill Arena - A react native app

## Pre-Requisite for development

- NodeJS and NPM(https://nodejs.org/en/download/)
- VSCode(https://code.visualstudio.com/)
  
## Setup the local environment

- Run 'npm --version' to ensure npm is installed
- Run 'npm install -g expo-cli' to install expo-cli globally
- Run 'expo --version' to ensure expo is installed
- Clone the project by using 'git clone git@github.com:SmartDroidies/skill-arena.git'

## Local development

### Run the project

Run 'npm install' within the project folder to install node packages

Use 'npm start' to run the application

### Running Unit Testing

Run 'npm test' to run the unit test cases

Run 'npm test -- --coverage' to run the unit test cases with coverage  

Run 'npm test -- --coverage --collectCoverageFrom="./src/**"' to run the unit test cases with coverage  

### Verify the application

- Install Expo Go(https://play.google.com/store/apps/details?id=host.exp.exponent) from google play store
- Open Expo Go and scan the bar code on screen to run the app on mobile

## Troubleshooting

- Try 'npm config set registry https://registry.npmjs.org/' when you have trouble in installing node packages

## Build & Packaging

### Development build 

- Development build using 'npx expo start --dev-client'

### Android build locally

npx expo run:android

### Apk for Local Testing

Run ```eas build -p android --profile development``` to generate an android development build

## Coding practices

### Design practices

- Every component should go into its own file
- Always use function components
- Always apply styling with a defines style name
  
### Name standard

- Always use smaller case when creating folders
- Always named the files in in pascal case
