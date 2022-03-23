import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {
  //COMUNICACION DE HIJO [variableHIJO]= "variablesPADRE"
  @Input() hijoEquipo:any;

  //COMUNICACION DE PADRE A HIJO
  @Output() hijoCanasta:EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  setCanasta(puntos:number,nombreJugador:string){
    this.hijoCanasta.emit({
      puntos,
      nombreJugador
    })
  }

}
