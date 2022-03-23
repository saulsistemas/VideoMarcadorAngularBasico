import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marcador',
  templateUrl: './marcador.component.html',
  styleUrls: ['./marcador.component.css']
})
export class MarcadorComponent implements OnInit {

  puntosLocales=0;
  puntosVisintantes=0;

  equipoLocal:any ={
    nombre:'lakers',
    logo: '/assets/img/LAL.svg',
    jugadores:[
      {nombre:'saul',puntos:0,imagen:'/assets/img/thomas.png'},
      {nombre:'carlos',puntos:0,imagen:'/assets/img/kuzma.png'},
      {nombre:'thiago',puntos:0,imagen:'/assets/img/randle.png'},
      {nombre:'miguel',puntos:0,imagen:'/assets/img/ingram.png'},
      {nombre:'lopez',puntos:0,imagen:'/assets/img/lopez.png'},
    ]
  }

  equipoVisitante:any ={
    nombre:'celtics',
    logo: '/assets/img/BOS.svg',
    jugadores:[
      {nombre:'andres',puntos:0,imagen:'/assets/img/allen.png'},
      {nombre:'julio',puntos:0,imagen:'/assets/img/bynes.png'},
      {nombre:'verto',puntos:0,imagen:'/assets/img/bird.png'},
      {nombre:'pedro',puntos:0,imagen:'/assets/img/brown.png'},
      {nombre:'jhon',puntos:0,imagen:'/assets/img/gibson.png'},
    ]
  }
  constructor() { }

  ngOnInit(): void {
  }
  getCanastaLocal($event:any){
    this.puntosLocales +=$event.puntos;
    this.equipoLocal.jugadores.array.forEach((element:any) => {
      if (element.nombre === $event.nombreJugador) {
        element.puntos +=$event.puntos
      } 
    });
  }
  getCanastaVisitante($event:any){
    this.puntosVisintantes +=$event.puntos;
    this.equipoVisitante.jugadores.array.forEach((element:any) => {
      if (element.nombre === $event.nombreJugador) {
        element.puntos +=$event.puntos
      } 
    });
  }

}
