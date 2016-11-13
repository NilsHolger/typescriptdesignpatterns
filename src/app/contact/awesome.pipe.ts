import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'awesome'})
/**precede the input string with the word awesome */
export class AwesomePipe implements PipeTransform {
    transform(phrase: string){
        return phrase ? 'Awesome ' + phrase : ' ';
    }
}