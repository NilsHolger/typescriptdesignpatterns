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
import { HeroesService } from './heroes/heroes.service';
import { FormsComponent } from './forms/forms.component';
import { VideosComponent } from './videos/videos.component';
import { VideoListComponent } from './videos/video-list/video-list.component';
import { VideoListItemComponent } from './videos/video-list-item/video-list-item.component';
import { VideoDetailComponent } from './videos/video-detail/video-detail.component';
import { VideoService } from './videos/video.service';
import { AppStateService } from './videos/app-state.service';
import { YoutubeSafeUrlPipe } from './videos/youtube-safe-url.pipe';

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
    HeroesComponent,
    FormsComponent,
    VideosComponent,
    VideoListComponent,
    VideoListItemComponent,
    VideoDetailComponent,
    YoutubeSafeUrlPipe
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
  providers: [TechnologyService, VideoService, AppStateService, HeroesService, TechnologySearchService, UserService, ContactService, WikipediaSearchService, PokemonService],
  bootstrap: [AppComponent]
})

export class AppModule { }
