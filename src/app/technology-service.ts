import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Technology } from './technology';
import { MYTECHNOLOGIES } from './mock-technologies';
@Injectable()
export class TechnologyService {
  private technologiesUrl = 'app/technologies';
  constructor(private http: Http) { }
  getTechnologies(): Promise<Technology[]>{
    return this.http.get(this.technologiesUrl)
                        .toPromise()
                        .then(response => response.json().data as Technology[])
                        .catch(this.handleError);
  }
  private handleError(error: any): Promise<any>{
          console.error('an error occured', error);
          return Promise.reject(error.message || error);
  }
  getTechnology(id:number): Promise<Technology>{
    return this.getTechnologies().then(technologies => technologies.find(t => t.id === id))
  }
  private headers = new Headers({'Content-Type': 'application/json'});

  update(technology:Technology): Promise<Technology>{
          const url = `${this.technologiesUrl}/${technology.id}`;
          return this.http.put(url, JSON.stringify(technology), {headers: this.headers})
          .toPromise()
          .then(() => technology)
          .catch(this.handleError);
  }
  create(name: string ): Promise<Technology>{
    return this.http
           .post(this.technologiesUrl, JSON.stringify({name: name}), {headers: this.headers})
           .toPromise()
           .then(res => res.json().data)
           .catch(this.handleError);
  }
  delete(id: number): Promise<void>{
          const url = `${this.technologiesUrl}/${id}`;
          return this.http.delete(url, {headers: this.headers})
          .toPromise()
          .then(() => null)
          .catch(this.handleError);
  }

  getTechnologiesSlowly(): Promise<Technology[]>{
    return new Promise<Technology[]>(resolve =>
    setTimeout(resolve, 100))
    .then(()=> this.getTechnologies());
  }
}
