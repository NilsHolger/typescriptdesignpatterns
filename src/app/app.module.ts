import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Singleton } from './singleton';
//import { AbstractFactory } from './abstractfactory';
import { FactoryMethod } from './factorymethod';
import { Builder } from './builder';
import { Prototype } from './prototype';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [Singleton, FactoryMethod, Builder, Prototype],
  bootstrap: [AppComponent]
})
export class AppModule { }
