import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import './rxjs-extensions';
import { Adapter } from './adapter';
import { Technology } from './technology';
import { AppComponent } from './appcomponent';
import { TechnologyComponent } from './technology.component';
import { TechnologyDetailComponent } from './technology-detail/technology-detail.component';
import { TechnologyService } from './technology-service';
import { TechnologySearchService } from './technologysearch-service';
import { UserService } from './user.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { TechnologySearchComponent } from './technologysearch/technologysearch.component';
import { HighlightDirective } from './highlight.directive';
import { TitleComponent } from './title/title.component';
import { ContactComponent } from './contact/contact.component';
import { AwesomePipe } from './contact/awesome.pipe';
import { ContactHighlightDirective } from './contact/contact.highlight.directive';
import { ContactService } from './contact/contact.service';
import { WikiSearchComponent } from './wikisearch/wikisearch.component';
import { DesignPatternsComponent } from './designpatterns/designpatterns.component';
import { WikipediaSearchService } from './wikisearch/wikipedia.service';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { PokemonService } from './pokemons/pokemon.service';
import { CapitalizePipe } from './pokemons/capitalize.pipe';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroesService } from './heroes/heroes.service'

@NgModule({
  declarations: [
    AppComponent,
    TechnologyComponent,
    TechnologyDetailComponent,
    DashboardComponent,
    TechnologySearchComponent,
    HighlightDirective,
    TitleComponent,
    ContactComponent,
    AwesomePipe,
    ContactHighlightDirective,
    WikiSearchComponent,
    DesignPatternsComponent,
    PokemonsComponent,
    CapitalizePipe,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    MaterialModule.forRoot()
  ],
  providers: [TechnologyService, HeroesService, TechnologySearchService, UserService, ContactService, WikipediaSearchService, PokemonService],
  bootstrap: [AppComponent]
})

export class AppModule { }
