import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-base-info',
  templateUrl: './base-info.component.html',
  styleUrls: ['./base-info.component.css']
})
export class BaseInfoComponent implements OnInit {

  @Input() materialId;

  public params = {
    Id: '', 
  }

  //存放
  public baseInfo
  mater = []

  constructor(
    public http: HttpClient,

  ) { }

  ngOnInit() {
    // console.log(this.materialId)
    this.GetBaseInfo()
    
  }

  public async GetBaseInfo(){
    let params= {
      Id: '', 
    }
    params.Id = this.materialId
    let api = "http://localhost:60001/api/hangang/material/materials";
    await this.http.get(api,{params})
    .toPromise()
    .then((res:any)=>{
      debugger
      this.baseInfo = res.items;
      // console.log(this.baseInfo)
    })
    let d1=[]
    let d2=[]
    if(this.baseInfo[0].date!=null){
      d1=(this.baseInfo[0].date).split("T");
      }
     else{
     d1.push("");
     }
     if(this.baseInfo[0].dateEnd!=null){
      d2=(this.baseInfo[0].dateEnd).split("T");
     }else{  d2.push("")}
    if(this.baseInfo[0].maxModel!=null){
      this.mater.push({
        name:this.baseInfo[0].name,
        reelNumber:this.baseInfo[0].reelNumber,
        manufacture:this.baseInfo[0].manufactoryName,
        thickness:this.baseInfo[0].minModel+"-"+this.baseInfo[0].maxModel,
        date:d1[0]+'——'+d2[0],
      })

    }else{
      this.mater.push({
        name:this.baseInfo[0].name,
        reelNumber:this.baseInfo[0].reelNumber,
        manufacture:this.baseInfo[0].manufactoryName,
        thickness:this.baseInfo[0].minModel,
        date:d1[0]+'——'+d2[0],
      })
    }
    // console.log(this.baseInfo)
    
    this.checkvalue.emit(this.mater[0].name);
  }
  @Output()//与@input相反
  checkvalue = new EventEmitter<any>();
}
