import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-treinos',
  templateUrl: './treinos.component.html',
  styleUrls: ['./treinos.component.scss']
})
export class TreinosComponent implements OnInit {

  constructor() { }
  treinos = [
    {
      name: 'treino 1',
      value: 1
      },
    {
      name: 'treino 2',
      value: 2
    },{
      name: 'treino 3',
      value: 3
    },
    {
      name: 'treino 4',
      value: 4
    },{
      name: 'treino 5',
      value: 5
    }
      ]

  ngOnInit(): void {
  }

}
