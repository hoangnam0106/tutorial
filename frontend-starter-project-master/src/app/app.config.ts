import {FuseNavigationItem} from '../@fuse/components/navigation';

//****************************************************
//  APP GLOBAL CONFIG
//  Contact: hienpt9@viettel.com.vn
//****************************************************

export const COPYRIGHT_INFO: string = 'IT Center, MYTEL';

export const KEYCLOAK_CONFIG = {
    url: 'https://mpg.mytel.com.mm:9220/auth/',
    realm: 'mpg-v2',
    clientId: 'mpg-web-admin',
    bearerExcludedUrls: ['/assets']
};

export const SERVICE_URLS = {
    partners: 'http://10.201.214.4:8000/mpg/v2/partners'
};

export const WELCOME_PATHS: any[] = [
    {role: 'mpg_admin',     path: 'partners/create'},
    {role: 'mpg_sale',      path: 'dashboards/sale'},
    {role: 'mpg_finance',   path: 'dashboards/finance'},
    {role: 'mpg_partner',   path: 'dashboards/partner'},
    {role: 'mpg_customer',   path: 'dashboards/customer'}
];

export const NAVIGATION_ITEMS: FuseNavigationItem[] = [
    {
        id: 'dashboards',
        title: 'Dashboard',
        subtitle: 'Monitor & Analysis',
        type: 'group',
        meta: {roles: ['mpg_admin', 'mpg_sale', 'mpg_finance']},
        children: [
            {
                id: 'dashboards.sale',
                title: 'Sale',
                type: 'basic',
                icon: 'mat_outline:bar_chart',
                link: '/dashboards/sale',
                meta: {roles: ['mpg_admin','mpg_sale']}
            },
            {
                id: 'dashboards.finance',
                title: 'Finance',
                type: 'basic',
                icon: 'mat_outline:attach_money',
                link: '/dashboards/finance',
                meta: {roles: ['mpg_admin', 'mpg_finance']}
            },
            {
                id: 'dashboards.partner',
                title: 'Partner',
                type: 'basic',
                icon: 'mat_outline:show_chart',
                link: '/dashboards/partner',
                meta: {roles: ['mpg_admin', 'mpg_partner']}
            },
            {
                id: 'dashboards.customer',
                title: 'Customer',
                type: 'basic',
                icon: 'mat_outline:show_chart',
                link: '/dashboards/customer/list',
                meta: {roles: ['mpg_admin', 'mpg_customer']}
            }
        ]
    },
    {
        id: 'partners',
        title: 'Partners',
        subtitle: 'Manage partners',
        type: 'group',
        children: [
            {
                id: 'partners.create',
                title: 'Create Partner',
                type: 'basic',
                icon: 'mat_outline:add_business',
                link: '/partners/create',
                meta: {roles: ['mpg_admin', 'mpg_sale']}
            },
            {
                id: 'partners.list',
                title: 'View partners',
                type: 'basic',
                icon: 'mat_outline:business',
                link: '/partners/list',
                meta: {roles: ['mpg_admin', 'mpg_sale', 'mpg_finance']}
            },
            {
                id: 'partners.accounts',
                title: 'Accounts',
                icon: 'mat_outline:account_balance_wallet',
                type: 'collapsable',
                children:[
                    {
                        id: 'partners.accounts.check_balance',
                        title: 'Check balance',
                        type: 'basic',
                        link: '/partners/account/check_balance',
                        meta: {roles: ['mpg_admin', 'mpg_finance', 'mpg_partner']}
                    },
                    {
                        id: 'partners.accounts.deposit_request',
                        title: 'Create deposit request',
                        type: 'basic',
                        link: '/partners/account/create_deposit_request',
                        meta: {roles: ['mpg_admin', 'mpg_sale', 'mpg_partner']}
                    },
                    {
                        id: 'partners.accounts.deposit_request',
                        title: 'Verify deposit requests',
                        type: 'basic',
                        link: '/partners/account/verify_deposit_request',
                        meta: {roles: ['mpg_admin', 'mpg_finance']}
                    }
                ]
            }
        ]
    },
    {
        id: 'products',
        title: 'Products',
        subtitle: 'Manage products',
        type: 'group',
        children: [
            {
                id: 'products.create',
                title: 'Create product',
                type: 'basic',
                icon: 'mat_outline:playlist_add',
                link: '/products/create',
                meta: {roles: ['mpg_admin', 'mpg_sale']}
            },
            {
                id: 'products.list',
                title: 'View products',
                type: 'basic',
                icon: 'mat_outline:qr_code',
                link: '/products/list',
                meta: {roles: ['mpg_admin', 'mpg_sale', 'mpg_finance']}
            }
        ]
    },
    {
        id: 'reports',
        title: 'Reports',
        subtitle: 'Data reports',
        type: 'group',
        children: [
            {
                id: 'reports.transactions',
                title: 'Transactions',
                type: 'basic',
                icon: 'mat_outline:format_list_bulleted',
                link: '/reports/transactions',
                meta: {roles: ['mpg_admin', 'mpg_sale', 'mpg_finance']}
            },
            {
                id: 'reports.deposits',
                title: 'Deposits',
                type: 'basic',
                icon: 'mat_outline:price_check',
                link: '/reports/deposits',
                meta: {roles: ['mpg_admin', 'mpg_finance']}
            },
            {
                id: 'reports.close_balances',
                title: 'Close balances',
                type: 'basic',
                icon: 'mat_outline:money',
                link: '/reports/close_balances',
                meta: {roles: ['mpg_admin','mpg_finance']}
            }
        ]
    }
];
