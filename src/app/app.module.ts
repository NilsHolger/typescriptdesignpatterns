import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    AppRoutingModule
  ],
  providers: [TechnologyService],
  bootstrap: [AppComponent]
})

export class AppModule { }
