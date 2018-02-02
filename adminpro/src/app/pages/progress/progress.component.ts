import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {
  progreso: number = 50;
  constructor() { }

  ngOnInit() {
  }
  cambiarValor(val: number) {
      this.progreso = parseFloat(this.progreso.toString());
      const aux: number = this.progreso + val;
      if (aux > 100) {
        this.progreso = 100;
        return;
      }
      if (aux < 0) {
        this.progreso = 0;
        return;
      }
      this.progreso = this.progreso + val;
  }

}
