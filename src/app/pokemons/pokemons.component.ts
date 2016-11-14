import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon.service';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  pokemon: Pokemon[] = [];
  isLoading: boolean = false;
  error: boolean = false;
  constructor(private pokemonService : PokemonService) { }

  ngOnInit(){
    this.loadMore();
  }
  loadMore() : void{
    this.isLoading = true;
    this.pokemonService.getPokemon(0, 9)
    .then(pokemon => {
      pokemon = pokemon.map(p => {
        p.imageLoaded = false;
        console.log('loadmore: ' + p);
        return p;
      });
      this.pokemon = this.pokemon.concat(pokemon);
      this.isLoading = false;
      this.error = false;
    })
    .catch((error: any) => {
      console.log(error);
      this.error = true;
      this.isLoading = false;
    });
  }
   private handleError(error: any): Promise<any>{
          console.error('an error occured', error);
          return Promise.reject(error.message || error);
  }
}
