import { Component, OnInit } from '@angular/core';
import { Animal } from '../models/animal';
@Component({ 
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

  animals: Array<Object>;

  constructor() {
   this.animals = [ 
    new Animal('Tiger','Mile','5'),
    new Animal('Horse','Djole','2'),
    new Animal('Monkey','Pera','3'),
    new Animal('Elephant','Tomislav','4'),
    new Animal('Bison','Milisav','2'),
   ];
  }

   removeAnimal(animal)
   {
     let index = this.animals.indexOf(animal);
     this.animals.splice(index, 1);
   }


  ngOnInit() {
  }

}
