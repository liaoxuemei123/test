import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-bending',
  templateUrl: './bending.component.html',
  styleUrls: ['./bending.component.css']
})
export class BendingComponent implements OnInit {

  public materialId

  constructor(
   
    private router: Router,
  ) { }

  ngOnInit() {
    this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
  }

}
