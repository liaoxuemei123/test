import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DisplayService } from './display.service'

@Component({
  selector: 'app-page-display',
  templateUrl: './page-display.component.html',
  styleUrls: ['./page-display.component.css']
})
export class PageDisplayComponent implements OnInit {

  //材料id, 在进入展示页面时由材料首页传递进来
  public materialId
  constructor(    
    private route: ActivatedRoute,
    private displayService: DisplayService,
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    this.materialId = params.get('materialId');
    })
    // console.log(this.materialId);
    this.Thematerial() 
  }

  public thematerial=[];
  public mater=[]
  ma={
    id:""
  }
 Thematerial(){
  this.ma.id=this.materialId
    this.displayService.Getmaterial(this.ma).then((res: any) => {
      this.thematerial = res.items;
       this.thematerial.forEach((val, i, array) =>{
        this.mater.push({
          name: val.name,
          manufacture: val.manufactoryName,
          thickness: val.model,
          typicalPart:val.typicalPartName,
          date:val.date,          

    
        })})
      }   
      )
  }

}
