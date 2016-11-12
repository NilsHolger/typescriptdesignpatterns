import {Component } from '@angular/core';

@Component({
    selector: 'my-app',
    styleUrls: ['./app.component.css'],
    template: `<h1>{{title}} <i class="fa fa-heart" style="color:red;" aria-hidden="true"></i></h1>
    <nav>
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/technologies" routerLinkActive="active">Technologies</a>
    </nav>
    <router-outlet></router-outlet>
    `
})
export class AppComponent {
      title = 'Technologies in Motion';
}
