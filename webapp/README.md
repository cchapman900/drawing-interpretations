# Drawing Interpretations Webapp

This serves as the frontend to the Drawing Service API

## Requirements
- `angular-cli@1.7.4`

## Running
To serve the webapp, run

```
ng serve
```

Or serve it directly from the `/dist` folder

## Auth0 Configuration
Auth0, used for user management, expects a callback to the address `localhost:4200`. If another address is used for hosting, it may cause issues with the authentication process.
