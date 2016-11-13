import {Component } from '@angular/core';

@Component({
    selector: 'my-app',
    styleUrls: ['./app.component.css'],
    template: ` <app-title [subtitle]="subtitle"></app-title>
    <nav>
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/technologies" routerLinkActive="active">Technologies</a>
    <a routerLink="/contact" routerLinkActive="active">Contact</a>
    <a routerLink="/wikisearch" routerLinkActive="active">Wiki Search</a>
    <a routerLink="/designpatterns" routerLinkActive="active">Design Patterns</a>
    </nav>
    <router-outlet></router-outlet>
    `
})
export class AppComponent {
    subtitle = '(v0.0.1)';
      
}
