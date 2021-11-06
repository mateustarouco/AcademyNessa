import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Treinosservice} from "./treinosservice";

@Component({
  selector: 'app-treinos',
  templateUrl: './training.component.html',
  styleUrls: ['./trainig.component.scss']
})
export class TrainingComponent implements OnInit {
  selected = 0
  title = ''
  treinos : Array<any> = []
  constructor(private route: ActivatedRoute,
              private treinosService : Treinosservice) {
    this.route.queryParams.subscribe(params => {
      this.selected = params[0];
    });
  }


  ngOnInit(): void {
    if(this.selected == 1){
      this.treinos = this.treinosService.treinos1
      this.title = 'Treino 1'
    }else if(this.selected == 2){
      this.treinos = this.treinosService.treinos2
      this.title = 'Treino 2'
    }else if(this.selected == 3){
      this.treinos = this.treinosService.treinos3
      this.title = 'Treino 3'
    }else if(this.selected == 4){
      this.treinos = this.treinosService.treinos4
      this.title = 'Treino 4'
    }else if(this.selected == 5){
      this.treinos = this.treinosService.treinos5
      this.title = 'Treino 5'
    }
  }

}
