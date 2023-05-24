import { Component, OnInit } from '@angular/core';
import { EquipamentosService } from 'src/app/core/api/esteiras.model';
import { Equipamento } from 'src/app/core/interfaces/esteira.model';

@Component({
  selector: 'app-botoes',
  templateUrl: './botoes.component.html',
  styleUrls: ['./botoes.component.scss']
})
export class BotoesComponent implements OnInit {

  esteiras: Equipamento[] = [];

  constructor(private readonly _equipamentosService: EquipamentosService){}

  ngOnInit(): void {
    this._equipamentosService.getEquipamentos().subscribe(
      (equipamentos) => {
        this.esteiras = equipamentos;
      }
    );
  }

  mudaCorEsteira(event: Equipamento): void{
    switch (event.cor) {
      case 'vermelha':
        event.cor = 'verde';
        break;
    
      default:
        event.cor = 'vermelha';
        break;
    }

    this._equipamentosService.atualizarEquipamento(event.id,event).subscribe((response: Equipamento) => {});

    return;
  }

}
