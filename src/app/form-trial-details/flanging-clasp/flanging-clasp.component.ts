import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-flanging-clasp',
  templateUrl: './flanging-clasp.component.html',
  styleUrls: ['./flanging-clasp.component.css']
})
export class FlangingClaspComponent implements OnInit {
  public materialId
  constructor( private router: Router,) { }

  ngOnInit() {   this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
  }

}
