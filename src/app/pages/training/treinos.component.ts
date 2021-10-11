import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-treinos',
  templateUrl: './training.component.html',
  styleUrls: ['./trainig.component.scss']
})
export class TrainingComponent implements OnInit {
  selected = 0
  treinos : Array<any> = []
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.selected = params[0];
    });
  }
  treinos1 = [
    {name:'Rotação externa do quadril',
     video: '0'},
    {name:'Flexão e extenção do ombro',
      video: '11'},
    {name:'Prancha frontal isométrica',
      video: '1'},
    {name:'Leg press horizontal',
      video: '2'},
    {name:'Supino inclinado articulado',
      video: '10'},
    {name:'Cadeira extensora',
      video: '3'},
    {name:'Rosca Alternada',
      video: '4'},
    {name:'Agachamento peso corporal',
      video: '5'},
    {name:'Voador',
      video: '6'},
    {name:'Rosca martelo com halter',
      video: '7'}
  ]
  treinos2 = [
    {name:'Rotação externa do quadril',
      video: '0'},
    {name:'Flexão e extenção do ombro',
      video: '11'},
    {name:'Prancha frontal isométrica',
      video: '1'},
    {name:'Leg press horizontal',
      video: '2'},
    {name:'Supino inclinado articulado',
      video: '10'},
    {name:'Cadeira extensora',
      video: '3'},
    {name:'Rosca Alternada',
      video: '4'},
    {name:'Agachamento peso corporal',
      video: '5'},
    {name:'Voador',
      video: '6'},
    {name:'Rosca martelo com halter',
      video: '7'}
  ]

  ngOnInit(): void {
    if(this.selected == 1){
      this.treinos = this.treinos1
    }else if(this.selected == 2){
      this.treinos = this.treinos2
    }
  }

}
