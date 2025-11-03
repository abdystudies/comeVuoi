import { Component } from '@angular/core';
import { MeteoService } from '../services/meteo-service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-pagina3',
  imports: [CommonModule],
  templateUrl: './pagina3.html',
  styleUrl: './pagina3.css',
})
export class Pagina3 {
  // Campo di ricerca (CAP, città, o "lat,lon")
  position: string = '';
  meteo: any = null;
  error: string | null = null;

  constructor(private meteoService: MeteoService) {}

  /**
   * Avvia la ricerca del meteo. Se viene passato value lo usa, altrimenti usa this.position.
   */
  searchMeteo(value?: string) {
    const pos = value !== undefined ? value : this.position;
    this.position = pos || '';
    this.meteo = null;
    this.error = null;

    if (!pos || pos.trim() === '') {
      this.error = 'Inserisci un CAP, una città o coordinate (lat,lon).';
      return;
    }

    this.meteoService.getMeteo(pos).subscribe({
      next: (res) => {
        this.meteo = res;
        this.error = null;
      },
      error: (err) => {
        console.error('Errore getMeteo', err);
        this.error = 'Errore nella richiesta meteo.';
        this.meteo = null;
      },
    });
  }
}
