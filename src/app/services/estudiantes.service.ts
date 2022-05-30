import { Estudiantes } from 'src/app/interfaces/estudiantes';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  ListaEstudiantes: Estudiantes[] = [
    {nombre: "Giuliana", apellido:"Carnevalle", curso: 'Angular', nota: 10 , profesor: 'Suarez'},
    {nombre: "Martina",  apellido:"Lopez",curso: 'Angular', nota: 9 , profesor: 'Espeche'},
    {nombre: "Juana", apellido:"Gonzalez", curso: 'Vue', nota: 8 , profesor: 'Diaz'},
    {nombre: "Paula", apellido:"Villecco", curso: 'React', nota: 7 , profesor: 'Diaz'},
    {nombre: "Belen", apellido:"Paulus", curso: 'Angular', nota: 6 , profesor: 'Gonzalez'},
    {nombre: "Ariana", apellido:"Zago", curso: 'Vue', nota: 5 , profesor: 'Pereyra'},
    {nombre: "Andres",  apellido:"Grzlak",curso: 'React', nota: 4 , profesor: 'Garcia'},
    {nombre: "Ariel", apellido:"Vercellone", curso: 'Angular', nota: 3 , profesor: 'Russo'},
    {nombre: "Thiago", apellido:"Mambrin", curso: 'Vue', nota: 2 , profesor: 'Garcia'},
    {nombre: "Lara",  apellido:"Rivero",curso: 'React', nota: 1 , profesor: 'Pereyra'},
    {nombre: "Simon", apellido:"Sanchez", curso: 'Angular', nota: 0 , profesor: 'Espeche'},
    {nombre: "Valentina", apellido:"Margaria", curso: 'Vue', nota: 10 , profesor: 'Suarez'},
    {nombre: "Belen", apellido:"Paulus", curso: 'Angular', nota: 6 , profesor: 'Gonzalez'},
    {nombre: "Ariana", apellido:"Zago", curso: 'Vue', nota: 5 , profesor: 'Pereyra'},
    {nombre: "Andres",  apellido:"Grzlak",curso: 'React', nota: 4 , profesor: 'Garcia'},
    {nombre: "Ariel", apellido:"Vercellone", curso: 'Angular', nota: 3 , profesor: 'Russo'},
    {nombre: "Thiago", apellido:"Mambrin", curso: 'Vue', nota: 2 , profesor: 'Garcia'},
    {nombre: "Lara",  apellido:"Rivero",curso: 'React', nota: 1 , profesor: 'Pereyra'},
    {nombre: "Simon", apellido:"Sanchez", curso: 'Angular', nota: 0 , profesor: 'Espeche'},
    {nombre: "Valentina", apellido:"Margaria", curso: 'Vue', nota: 10 , profesor: 'Suarez'},
    {nombre: "Giuliana", apellido:"Carnevalle", curso: 'Angular', nota: 10 , profesor: 'Suarez'},
    {nombre: "Martina",  apellido:"Lopez",curso: 'Angular', nota: 9 , profesor: 'Espeche'},
    {nombre: "Juana", apellido:"Gonzalez", curso: 'Vue', nota: 8 , profesor: 'Diaz'},
    {nombre: "Paula", apellido:"Villecco", curso: 'React', nota: 7 , profesor: 'Diaz'},
    {nombre: "Belen", apellido:"Paulus", curso: 'Angular', nota: 6 , profesor: 'Gonzalez'},
  ];
  constructor() { }

  getEstudiantes(){
    return this.ListaEstudiantes.slice();
  }

  eliminarEstudiante(index: number){
    this.ListaEstudiantes.splice(index, 1);
  }

  agregarEstudiante(estudiante: Estudiantes){
    this.ListaEstudiantes.unshift(estudiante);
    
  }
}
