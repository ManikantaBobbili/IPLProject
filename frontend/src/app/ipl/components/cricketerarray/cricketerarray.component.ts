import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cricketer } from '../../types/Cricketer';
@Component({
    selector: 'app-cricketerarray',
    templateUrl: './cricketerarray.component.html',
    styleUrls: ['./cricketerarray.component.scss']
})
export class CricketerArrayComponent implements OnInit {
  cricketers: Cricketer[] = [];
  showCricketers: boolean = true;
  constructor(){}
  ngOnInit() {
    this.cricketers = [
      new Cricketer(1,101,'Virat Kohli', 32 ,'Indian',12,'Batsman',12000,4),
      new Cricketer(2,102,'AB de Villiers', 37 ,'South African',15,'Batsman',9500,1),
      new Cricketer(3,103,'Jasprit Bumrah', 28 ,'Indian',8,'Bowler',200,250),
      new Cricketer(4,104,'Ben Stokes', 30 ,'English',10,'All-Rounder',4500,150),
    ]
  }

  toggleCricketers() {
    this.showCricketers = !this.showCricketers;
  }
}
