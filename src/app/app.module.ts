import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { EventsComponent } from './components/pages/events/events.component';
import { ClientsComponent } from './components/pages/clients/clients.component';
import { DocumentsComponent } from './components/pages/documents/documents.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SupportComponent } from './components/pages/support/support.component';
import { UnauthorizedComponent } from './components/pages/unauthorized/unauthorized.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { SidebarComponent } from './components/ui/sidebar/sidebar/sidebar.component';
import { SidebarHeaderComponent } from './components/ui/sidebar/sidebar-header/sidebar-header.component';
import { MenuListComponent } from './components/ui/sidebar/menu-list/menu-list.component';
import { HeaderComponent } from './components/ui/header/header/header.component';
import { HeaderMenuComponent } from './components/ui/header/header-menu/header-menu.component';
import { NotifMenuComponent } from './components/ui/header/notif-menu/notif-menu.component';
import { DashboardCardComponent } from './components/ui/uiComponents/dashboard/dashboard-card/dashboard-card.component';
import { DashboardGraphComponent } from './components/ui/uiComponents/dashboard/dashboard-graph/dashboard-graph.component';
import { EventCalendarComponent } from './components/ui/uiComponents/events/event-calendar/event-calendar.component';
import { NewEventComponent } from './components/ui/uiComponents/events/new-event/new-event.component';
import { EditEventComponent } from './components/ui/uiComponents/events/edit-event/edit-event.component';
import { NewClientComponent } from './components/ui/uiComponents/clients/new-client/new-client.component';
import { ClientListComponent } from './components/ui/uiComponents/clients/client-list/client-list.component';
import { EditProfileComponent } from './components/ui/uiComponents/modals/edit-profile/edit-profile.component';
import { LogOutAlertComponent } from './components/ui/uiComponents/modals/log-out-alert/log-out-alert.component';
import { EditPasswordComponent } from './components/ui/uiComponents/modals/edit-password/edit-password.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartsModule } from 'ng2-charts';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import { MailComponent } from './components/pages/mail/mail.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ContactFromClientListComponent } from './components/ui/uiComponents/contact-from-client/contact-from-client-list/contact-from-client-list.component';
import { ContactFromClientCreateComponent } from './components/ui/uiComponents/contact-from-client/contact-from-client-create/contact-from-client-create.component';
import { CompanyComponent } from './components/pages/company/company.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EventsComponent,
    ClientsComponent,
    DocumentsComponent,
    LoginComponent,
    SupportComponent,
    UnauthorizedComponent,
    ComingSoonComponent,
    SidebarComponent,
    SidebarHeaderComponent,
    MenuListComponent,
    HeaderComponent,
    HeaderMenuComponent,
    NotifMenuComponent,
    DashboardCardComponent,
    DashboardGraphComponent,
    EventCalendarComponent,
    NewEventComponent,
    EditEventComponent,
    NewClientComponent,
    ClientListComponent,
    EditProfileComponent,
    LogOutAlertComponent,
    EditPasswordComponent,
    MailComponent,
    ContactFromClientListComponent,
    ContactFromClientCreateComponent,
    CompanyComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    FlexLayoutModule,
    ChartsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
