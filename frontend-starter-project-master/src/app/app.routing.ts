import { Route } from '@angular/router';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';
import {CreatePartnerComponent} from './components/partners/create-partner/create-partner.component';
import {ListPartnerComponent} from './components/partners/list-partner/list-partner.component';
import {CheckAccountBalanceComponent} from './components/partners/manage-account/check-account-balance/check-account-balance.component';
import {CreateDepositRequestComponent} from './components/partners/manage-account/create-deposit-request/create-deposit-request.component';
import {VerifyDepositRequestComponent} from './components/partners/manage-account/verify-deposit-request/verify-deposit-request.component';
import {CreateProductComponent} from './components/products/create-product/create-product.component';
import {ListProductComponent} from './components/products/list-product/list-product.component';
import {TransactionReportComponent} from './components/reports/transaction-report/transaction-report.component';
import {DepositReportComponent} from './components/reports/deposit-report/deposit-report.component';
import {CloseBalanceReportComponent} from './components/reports/close-balance-report/close-balance-report.component';
import {AuthGuard} from './keycloak/auth.guard';
import {SaleDashboardComponent} from './components/dashboards/sale-dashboard/sale-dashboard.component';
import {FinanceDashboardComponent} from './components/dashboards/finance-dashboard/finance-dashboard.component';
import {PartnerDashboardComponent} from './components/dashboards/partner-dashboard/partner-dashboard.component';
import { CallBotComponent } from './components/call-bot/call-bot.component';
import { DetailCallBotComponent } from './components/call-bot/detail/detail-call-bot/detail-call-bot.component';
import { CreateCallbotComponent } from './components/call-bot/create-callbot/create-callbot.component';
import {CustomerComponent} from "./components/customer/customer.component";
import {CreateCustomerComponent} from "./components/customer/create-customer/create-customer.component";
import {InvoiceComponent} from "./components/invoice/invoice.component";
import {CreateInvoiceComponent} from "./components/invoice/create-invoice/create-invoice.component";

// @formatter:off
// tslint:disable:max-line-length
export const appRoutes: Route[] = [

    {path: '', pathMatch : 'full', redirectTo: 'dashboards/sale'},

    // Admin routes
    {
        path       : '',
        // canActivate: [AuthGuard],
        component  : LayoutComponent,
        resolve    : {
            initialData: InitialDataResolver,
        },
        children   : [
            {path: 'dashboards/sale', component: SaleDashboardComponent},
            {path: 'dashboards/finance', component: FinanceDashboardComponent},
            {path: 'dashboards/finance/:id', component: FinanceDashboardComponent},
            {path: 'dashboards/partner', component: PartnerDashboardComponent},
            {path: 'dashboards/call-bot', component: CallBotComponent},
            {path: 'dashboards/call-bot/:id', component: DetailCallBotComponent},
            {path: 'dashboards/customer/list', component: CustomerComponent},
            {path: 'customer/create', component: CreateCustomerComponent},
            {path: 'invoice/create', component: CreateInvoiceComponent},
            {path: 'customer/invoice', component: InvoiceComponent},
            {path: 'call-bot/create', component: CreateCallbotComponent},
            {path: 'partners/create', component: CreatePartnerComponent},
            {path: 'partners/list', component: ListPartnerComponent},
            {path: 'partners/account/check_balance', component: CheckAccountBalanceComponent},
            {path: 'partners/account/create_deposit_request', component: CreateDepositRequestComponent},
            {path: 'partners/account/verify_deposit_request', component: VerifyDepositRequestComponent},
            {path: 'products/create', component: CreateProductComponent},
            {path: 'products/list', component: ListProductComponent},
            {path: 'reports/transactions', component: TransactionReportComponent},
            {path: 'reports/deposits', component: DepositReportComponent},
            {path: 'reports/close_balances', component: CloseBalanceReportComponent}
            
        ]
    }
];
