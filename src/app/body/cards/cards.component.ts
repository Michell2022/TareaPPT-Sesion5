import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  numero = 0;

  incremento(){
    this.numero = this.numero+1;
  }

  decremento(){
    if(this.numero <= 0){
      Swal.fire('[ ERROR ] Debe incrementar el número.')
    }else{
      this.numero = this.numero-1;
    }
    
  }
}
