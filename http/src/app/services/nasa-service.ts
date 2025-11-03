import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment';
@Injectable({
  providedIn: 'root'
})
export class NasaService {
  constructor(private http: HttpClient) {}
  getApod() {
    return this.http.get(`https://api.nasa.gov/planetary/apod?api_key=${environment.nasaKey}`);
  }
}