import { AuthConfig } from "angular-oauth2-oidc";

export const authConfig: AuthConfig = {
    loginUrl: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token',
    clientId: '534a6991c4e949bbb7bbc5eeb10ca425',
    redirectUri: window.location.origin + '/callback',
    responseType: 'code',
    scope: 'user-read-private user-read-email',
    showDebugInformation: true,
    oidc: false,
    requireHttps: true
};