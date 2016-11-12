import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechnologyComponent } from './technology.component';
import { TechnologyDetailComponent } from './technology-detail/technology-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    {
        path: 'technologies',
        component: TechnologyComponent
    },
    {
        path: 'detail/:id',
        component: TechnologyDetailComponent
    },
    {
       path: 'dashboard',
       component: DashboardComponent
    },
    {
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
