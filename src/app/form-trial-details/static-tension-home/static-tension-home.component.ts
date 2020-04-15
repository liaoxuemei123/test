import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-static-tension-home',
  templateUrl: './static-tension-home.component.html',
  styleUrls: ['./static-tension-home.component.css'],
})
export class StaticTensionHomeComponent implements OnInit {

  public materialId

  constructor(
    private router: Router,

  ) { }

  ngOnInit() {
    this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
    // console.log(this.materialId)
  }

}
