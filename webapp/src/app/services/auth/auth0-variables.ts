interface AuthConfig {
    clientID: string;
    domain: string;
    callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
    clientID: 'ffE7t6nbFS3sknvkABEMlorM3Y4smyiW',
    domain: 'chrischapman.auth0.com',
    callbackURL: 'http://localhost:4200/callback'
};
