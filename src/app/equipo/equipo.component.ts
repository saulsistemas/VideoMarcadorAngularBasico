import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {
  //COMUNICACION DE HIJO [variableHIJO]= "variablesPADRE"
  @Input() hijoEquipo:any;
  constructor() { }

  ngOnInit(): void {
  }

}
