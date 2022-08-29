import {KeycloakAuthGuard, KeycloakService} from 'keycloak-angular';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Injectable} from '@angular/core';
import {NAVIGATION_ITEMS, WELCOME_PATHS} from '../app.config';
import {FuseNavigationItem} from '../../@fuse/components/navigation';

@Injectable({
    providedIn: 'root',
})

export class AuthGuard extends KeycloakAuthGuard {

    constructor(protected readonly router: Router,
                protected readonly keycloak: KeycloakService) {
        super(router, keycloak);
    }

    public async isAccessAllowed(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean | UrlTree> {
        const path = state.url;

        // Force the user to log in if currently unauthenticated.
        if (!this.authenticated) {
            await this.keycloak.login({
                redirectUri: window.location.origin + state.url,
            });
        }

        // Get the roles required from the route.
        const requiredRoles: string[] = this.getRequireRoles(path, NAVIGATION_ITEMS);

        // Allow the user to to proceed if no additional roles are required to access the route.
        if (!(requiredRoles instanceof Array) || requiredRoles.length === 0) {
            return true;
        }

        // Allow the user to proceed if all the required roles are present.
        for (const item of requiredRoles) {
            if (this.roles.includes(item)) {return true;}
        }

        const defaultPath: string = this.getDefaultPath(this.roles);
        return this.router.navigateByUrl(defaultPath);
    }

    getRequireRoles(path: string, navItems: FuseNavigationItem[]): string[] {
        for (const navItem of navItems) {
            if (navItem.link && navItem.link === path) {
                    return navItem.meta.roles;
            }
            // find in childrens
            if (navItem.children) {
                const roles = this.getRequireRoles(path, navItem.children);
                if (roles) {
                    return roles;
                }
            }
        }
        return undefined;
    }

    getDefaultPath(roles: string[]): any {
        for (const role of roles) {
            for (const welcomePath of WELCOME_PATHS) {
                if (role === welcomePath.role) {
                    return welcomePath.path;
                }
            }
        }
        return "dashboards/sale";
    }
}
