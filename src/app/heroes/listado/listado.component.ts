import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

  heroes: string[] = ['Spiderman', 'Ironman','Hulk','Thor','Capitán América'];

  heroeBorrado: string = '';
    // this.heroes = []; // se borrarian todos al dar clic
    // this.heroes.shift(); // Borra el primer elemento de un arreglo.
  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || '';

  }

  }

