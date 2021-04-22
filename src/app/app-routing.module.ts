import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './components/pages/clients/clients.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { DocumentsComponent } from './components/pages/documents/documents.component';
import { EventsComponent } from './components/pages/events/events.component';
import {CompanyComponent} from "./components/pages/company/company.component";
import {ClientListComponent} from "./components/ui/uiComponents/clients/client-list/client-list.component";
import {MailComponent} from './components/pages/mail/mail.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'events', component: EventsComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'client-list', component: ClientListComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'docs', component: DocumentsComponent },
  { path: 'coming', component: ComingSoonComponent },
  {path: 'mail', component: MailComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
