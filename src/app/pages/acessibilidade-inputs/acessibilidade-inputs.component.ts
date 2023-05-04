import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acessibilidade-inputs',
  templateUrl: './acessibilidade-inputs.component.html',
  styleUrls: ['./acessibilidade-inputs.component.scss']
})
export class AcessibilidadeInputsComponent implements OnInit {

  texto: string = '';
  caracteres: number = 0;

  ngOnInit(): void {

  }
  atualizarContador(): void {
    this.caracteres = this.texto.length;
  }

}
