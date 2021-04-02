import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { EditClientComponent } from './components/ui/uiComponents/clients/edit-client/edit-client.component';
import { NewClientComponent } from './components/ui/uiComponents/clients/new-client/new-client.component';
import { ClientListComponent } from './components/ui/uiComponents/clients/client-list/client-list.component';
import { EditProfileComponent } from './components/ui/uiComponents/modals/edit-profile/edit-profile.component';
import { LogOutAlertComponent } from './components/ui/uiComponents/modals/log-out-alert/log-out-alert.component';
import { EditPasswordComponent } from './components/ui/uiComponents/modals/edit-password/edit-password.component';

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
    EditClientComponent,
    NewClientComponent,
    ClientListComponent,
    EditProfileComponent,
    LogOutAlertComponent,
    EditPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
