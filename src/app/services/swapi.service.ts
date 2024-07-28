import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  private baseUrl: string = 'https://swapi.dev/api';

  constructor() { }

  getPeople() {
    return axios.get(`${this.baseUrl}/people/`);
  }

  getPerson(id: number) {
    return axios.get(`${this.baseUrl}/people/${id}/`);
  }
}
