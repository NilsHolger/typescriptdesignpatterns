import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechnologyComponent } from './technology.component';
import { TechnologyDetailComponent } from './technology-detail/technology-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { WikiSearchComponent } from './wikisearch/wikisearch.component';
import { DesignPatternsComponent } from './designpatterns/designpatterns.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsComponent } from './forms/forms.component';
import { VideosComponent } from './videos/videos.component';
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
      path: 'contact',
      component: ContactComponent
    },
    {
      path: 'wikisearch',
      component: WikiSearchComponent
    },
    {
      path: 'designpatterns',
      component: DesignPatternsComponent
    },
    {
      path: 'forms',
      component: FormsComponent
    },
    {
      path: 'videos',
      component: VideosComponent
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
