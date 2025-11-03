import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root',
})
export class MeteoService {
  constructor(private http: HttpClient) {}
    /**
     * Richiama l'API meteo per la posizione indicata.
     * position può essere: CAP, nome città, o "lat,lon" (es. "45.46,9.19").
     */
    getMeteo(position?: string) {
      const q = position ? `&q=${encodeURIComponent(position)}` : '';
      const url = `https://api.weatherapi.com/v1/current.json?key=${environment.meteoKey}${q}`;
      return this.http.get(url);
    }
}