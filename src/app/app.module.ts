import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { Adapter } from './adapter';
import { Technology } from './technology';
import { AppComponent } from './appcomponent';
import { TechnologyComponent } from './technology.component';
import { TechnologyDetailComponent } from './technology-detail/technology-detail.component';
import { TechnologyService } from './technology-service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TechnologyComponent,
    TechnologyDetailComponent,
    DashboardComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [TechnologyService],
  bootstrap: [AppComponent]
})

export class AppModule { }
