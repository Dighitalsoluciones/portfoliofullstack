import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  constructor() { }

  fechaExp1: number = 0;
  //fechaExp2: number = 0;  

  ngOnInit(): void {
    this.calcularAñosExp();
  }

  //Actualiza la cantidad de años de experiencia comparando el año actual
  calcularAñosExp(): void {
    let fechaActual = new Date();
    let añoActual = fechaActual.getFullYear();
    let resultado1 = añoActual - 2020;
    this.fechaExp1 = resultado1;
  }

}


