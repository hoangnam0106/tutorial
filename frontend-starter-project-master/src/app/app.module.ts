import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { FuseModule } from '@fuse';
import { FuseConfigModule } from '@fuse/services/config';
import { FuseMockApiModule } from '@fuse/lib/mock-api';
import { CoreModule } from 'app/core/core.module';
import { appConfig } from 'app/core/config/app.config';
import { mockApiServices } from 'app/mock-api';
import { LayoutModule } from 'app/layout/layout.module';
import { AppComponent } from 'app/app.component';
import { appRoutes } from 'app/app.routing';
import { CreatePartnerComponent } from './components/partners/create-partner/create-partner.component';
import { ListPartnerComponent } from './components/partners/list-partner/list-partner.component';
import { CheckAccountBalanceComponent } from './components/partners/manage-account/check-account-balance/check-account-balance.component';
import { VerifyDepositRequestComponent } from './components/partners/manage-account/verify-deposit-request/verify-deposit-request.component';
import { CreateDepositRequestComponent } from './components/partners/manage-account/create-deposit-request/create-deposit-request.component';
import { CreateProductComponent } from './components/products/create-product/create-product.component';
import { ListProductComponent } from './components/products/list-product/list-product.component';
import { TransactionReportComponent } from './components/reports/transaction-report/transaction-report.component';
import { DepositReportComponent } from './components/reports/deposit-report/deposit-report.component';
import { CloseBalanceReportComponent } from './components/reports/close-balance-report/close-balance-report.component';
import {KeycloakAngularModule} from 'keycloak-angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatOptionModule} from '@angular/material/core';
import {FuseAlertModule} from '../@fuse/components/alert';
import {FuseHighlightModule} from '../@fuse/components/highlight';
import { PartnerDashboardComponent } from './components/dashboards/partner-dashboard/partner-dashboard.component';
import { SaleDashboardComponent } from './components/dashboards/sale-dashboard/sale-dashboard.component';
import { FinanceDashboardComponent } from './components/dashboards/finance-dashboard/finance-dashboard.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { CallBotComponent } from './components/call-bot/call-bot.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DatePipe } from '@angular/common';
import { DetailCallBotComponent } from './components/call-bot/detail/detail-call-bot/detail-call-bot.component';
import { CreateCallbotComponent } from './components/call-bot/create-callbot/create-callbot.component';
import { CustomerComponent } from "./components/customer/customer.component";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CreateCustomerComponent } from './components/customer/create-customer/create-customer.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { CreateInvoiceComponent } from './components/invoice/create-invoice/create-invoice.component';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from "@angular/material/grid-list";

const routerConfig: ExtraOptions = {
    preloadingStrategy       : PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    useHash: true
};

@NgModule({
    declarations: [
        AppComponent,
        CreatePartnerComponent,
        ListPartnerComponent,
        CheckAccountBalanceComponent,
        VerifyDepositRequestComponent,
        CreateDepositRequestComponent,
        CreateProductComponent,
        ListProductComponent,
        TransactionReportComponent,
        DepositReportComponent,
        CloseBalanceReportComponent,
        PartnerDashboardComponent,
        SaleDashboardComponent,
        FinanceDashboardComponent,
        CallBotComponent,
        DetailCallBotComponent,
        CreateCallbotComponent,
        CustomerComponent,
        CreateCustomerComponent,
        InvoiceComponent,
        CreateInvoiceComponent

    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes, routerConfig),

        // Fuse, FuseConfig & FuseMockAPI
        FuseModule,
        FuseConfigModule.forRoot(appConfig),
        FuseMockApiModule.forRoot(mockApiServices),

        // Core module of your application
        CoreModule,

        // Layout module of your application
        LayoutModule,

        // 3rd party modules that require global configuration via forRoot
        MarkdownModule.forRoot({}),

        //Keycloak angular module
        KeycloakAngularModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatDividerModule,
        MatCardModule,
        MatButtonToggleModule,
        MatButtonModule,
        MatIconModule,
        MatSelectModule,
        MatOptionModule,
        MatProgressSpinnerModule,
        MatTableModule,
        MatPaginatorModule,
        FuseAlertModule,
        FuseHighlightModule,
        MatProgressBarModule,
        MatCheckboxModule,
        MatListModule,
        MatGridListModule,
        FormsModule
    ],
    providers:[DatePipe],
    // providers:[
    //     {
    //         provide: APP_INITIALIZER,
    //         useFactory: initializeKeycloak,
    //         multi: true,
    //         deps: [KeycloakService],
    //     }
    // ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
