import {KeycloakService} from 'keycloak-angular';
import {KEYCLOAK_CONFIG} from '../app.config';

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function initializeKeycloak(keycloak: KeycloakService) {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    return () => keycloak.init({
            config: {
                url: KEYCLOAK_CONFIG.url,
                realm: KEYCLOAK_CONFIG.realm,
                clientId: KEYCLOAK_CONFIG.clientId
            },
            bearerExcludedUrls: KEYCLOAK_CONFIG.bearerExcludedUrls,
            initOptions: {
                onLoad: 'login-required',
                checkLoginIframe: false,
                checkLoginIframeInterval: 25
            },
            loadUserProfileAtStartUp: true
        });
    return true;
}
