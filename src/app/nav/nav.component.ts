import { Component, OnInit } from '@angular/core';
import {Category} from './category';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
 

  constructor() { }
  title="STORE";
  categories:Category[]=[
    
  ]
  
  ngOnInit(): void {
 

  }

}
