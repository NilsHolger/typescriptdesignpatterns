import { Injectable } from '@angular/core';
import { Technology } from './technology';
import { MYTECHNOLOGIES } from './mock-technologies';

@Injectable()
export class TechnologyService {
  constructor() { }

  getTechnologies(): Promise<Technology[]>{
    return Promise.resolve(MYTECHNOLOGIES);
  }
  getTechnology(id:number): Promise<Technology>{
    return this.getTechnologies().then(technologies => technologies.find(t => t.id === id))
  }

  getTechnologiesSlowly(): Promise<Technology[]>{
    return new Promise<Technology[]>(resolve =>
    setTimeout(resolve, 100))
    .then(()=> this.getTechnologies());
  }


}
