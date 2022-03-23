import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-score',
  templateUrl: './top-score.component.html',
  styleUrls: ['./top-score.component.css']
})
export class TopScoreComponent implements OnInit {

  @Input() hijoEquipoLocal:any;
  @Input() hijoVisitante:any;

  jugadores:any=[];

  constructor() { }

  ngOnInit(): void {
    this.jugadores = [...this.hijoEquipoLocal.jugadores, ...this.hijoVisitante.jugadores]
  }
  ngAfterContentChecked(){
    this.sortJugadores();
  }
  sortJugadores(){
    this.jugadores.sort((a:any,b:any)=>{
      return(b.puntos - a.puntos)
    })
  }

}
