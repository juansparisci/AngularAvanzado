import { Component, OnInit, OnDestroy } from '@angular/core';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  constructor() {
  this.subscription = this.regresaObservable()
   .subscribe(
     numero => console.log('Subs', numero),
     error => console.error('Error en obs', error),
     () => console.log('El observador termino')
   );
   }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  regresaObservable(): Observable<any> {
    return new Observable( observer => {
      let contador = 0;
      const intervalo = setInterval(() => {
        contador += 1;
        const salida = {
          valor: contador
        };
        observer.next(salida);
/*         if (contador === 3) {
          clearInterval( intervalo );
          observer.complete();
        } */
       /*  if (contador === 2) {
          observer.error('error en obs');
        } */
      }
      , 500);
  }).retry(2).map(
    (resp: any) => {
       return resp.valor;
    }
  )
  .filter(
    (valor: any) => {
        return valor % 2 === 1;
    }
  );
  }
}
