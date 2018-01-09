import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

  animals: Array<Object>;

  constructor() {
   this.animals = [ {
    type: 'Tiger',
    name: 'Mile',
    age: '5'
  },
  {
    type: 'Horse',
    name: 'Djole',
    age: '2'

  },
  {
    type: 'Monkey',
    name: 'Pera',
    age:'3'
  },
  {
    type: 'Elephant',
    name:'Tomislav',
    age:'4'
  },
  {
    type: 'Bison',
    name:'Milisav',
    age:'7'
  }  
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
