import { Component, OnInit } from '@angular/core';
import { EquipamentosService } from 'src/app/core/api/esteiras.model';
import { Equipamento } from 'src/app/core/interfaces/esteira.model';

@Component({
  selector: 'app-esteiras',
  templateUrl: './esteiras.component.html',
  styleUrls: ['./esteiras.component.scss']
})
export class EsteirasComponent implements OnInit {

  primeiraFileiraEsteiras: Equipamento[] = [];
  segundaFileiraEsteiras: Equipamento[] = [];

  constructor(
    private readonly _equipamentosService: EquipamentosService
  ){}

  ngOnInit(): void {
    this.setaFileiraEsteira();
    setInterval(() => {
      this.setaFileiraEsteira();
    },3000);
  }

  setaFileiraEsteira(): void{
    this._equipamentosService.getEquipamentos().subscribe(
      (equipamentos) => {
        this.primeiraFileiraEsteiras = [];
        this.segundaFileiraEsteiras = [];
        equipamentos.map(equipamento => {
          if(equipamento.id <= 8){
            this.primeiraFileiraEsteiras.push(equipamento);
          }else{
            this.segundaFileiraEsteiras.push(equipamento);
          }
        });
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
