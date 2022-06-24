import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { ContractsComponent } from "./+contracts/contracts.component";
import { DocumentsComponent } from "./+documents/documents.component";
import { PayoutComponent } from "./+payout/payout.component";
import { TimeComponent } from "./+time/time.component";

const appRoutes: Routes = [
  {
    path: 'contracts',
    component: ContractsComponent
  },
  {
    path: 'documents',
    component: DocumentsComponent
  },
  {
    path: 'payout',
    component: PayoutComponent
  },
  {
    path: 'time',
    component: TimeComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'contracts'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'top',
      relativeLinkResolution: 'legacy'
    })
  ]
})

export class AppRoutingModule {}