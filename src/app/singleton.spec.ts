/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import {Singleton} from './singleton';

describe('Singleton', () => {
  it('should create an instance', () => {
    expect(new Singleton()).toBeTruthy();
  });
});
