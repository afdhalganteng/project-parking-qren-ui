/**
 * List of menu code in application
 */
import { Routes } from '@angular/router';
export const MENU_CODE = {
    userSetting: '',
};

/**
 * Path declaration of feature module.
 * Lazy load => loadChildren
 * If code is empty string then the menu is not from the API
 */

export const MODULE_ROUTES: Routes = [

    {
        path: '',
        loadChildren: () =>
            import('app/modules/tenant-management/tenant-management.module').then(
                m => m.TenantManagementModule
            ),
    },

];
