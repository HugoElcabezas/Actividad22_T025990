import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {

  Suma = 0;
  transacciones = [];

  obtenerValor(input: HTMLInputElement, tipo) {
    const valor = Number(input);

    if (valor <= 0) {
      alert('ingresar valor mayor a 0');
    } else if (valor > 0) {

      if (tipo === 'income') {
        this.Suma += valor;
      } else if (tipo === 'expense') {
        this.Suma -= valor;
      }
      this.transacciones.unshift([valor,tipo]);

    }
  }
}
