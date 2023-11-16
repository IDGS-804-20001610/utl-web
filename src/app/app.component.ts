import { Component, OnInit } from '@angular/core';


import * as $ from 'jquery';
import 'bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'utl-web';
  constructor() { }

  ngOnInit() {
    // Inicializa el carrusel al cargar el componente
    $(document).ready(() => {
      $('#carouselExampleIndicators').carousel();
    });
  }

  // Función para avanzar al siguiente slide
  nextSlide() {
    $('#carouselExampleIndicators').carousel('next');
  }

  // Función para retroceder al slide anterior
  prevSlide() {
    $('#carouselExampleIndicators').carousel('prev');
  }

}
