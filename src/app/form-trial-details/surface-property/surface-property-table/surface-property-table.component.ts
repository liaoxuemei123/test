import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-surface-property-table',
  templateUrl: './surface-property-table.component.html',
  styleUrls: ['./surface-property-table.component.css']
})
export class SurfacePropertyTableComponent implements OnInit {

  public materialId
  trialDataDetail=[]
  trialDataDetails=[]
  trialDataDetailss=[]
  trialDataDetailsss=[]
  table=[{
    one:["测试机构","执行标准","试验设备","试验方法","表面性能试验项目","表面质量等级(FD;FC;FB)"],
    key:["testOrganization","standard","equipment","testMethod","testItem",'surfaceQualityGrade']
},
{
  one:["面积（m2）","初始重量（g）","试验后重量（g）","膜重（g/mm2）",'重量要求（g/m2）'],
  key:["area","originalWeight","afterWeight","membraneWeight",'weightRequirement']
,
},
{
  one:["Ra要求"],
  key:["raRequirement"]
,
},{
  one:["公称厚度"],
  key:["raRequirement"]
,
}]
  constructor(
    private router: Router,
    public http: HttpClient,
  ) { }

  ngOnInit() {
    this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');

    this.GetTrialDataDetails();
    this.GetTrialDataDetailss();
    this.GetTrialDataDetailsss();
    this.GetTrialDataDetailssss()
  }
//镀层重量
  public async GetTrialDataDetails() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/surfacePropertyCoatingWeights/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetail = res
      console.log(this.trialDataDetail)
    })    
  }
  one=[]
  two=[]//每个位置的数据个数
  three=[]
  c=0
  widthConfig1 = ['150px', '100px','100px','100px','100px']
  widthConfig = ['100px', '180px', '120px', '120px', '120px','120px', '120px', '120px','120px','120px','120px'];
  aboveRoughness=[]
  abovePeakDensity=[]
  belowRoughness=[]
  belowPeakDensity=[]
  //粗糙度和峰值密度
  public async GetTrialDataDetailss() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/surfacePropertyRoughnessAndPeakDensity/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetails = res;
      this.c=this.trialDataDetails.length;
this.one=this.classitem(this.trialDataDetails,"position")
      console.log(this.one)
      for(let a=0;a<this.one.length;a++){
        this.one[a].List.map(val=>{
        this.aboveRoughness.push(val.aboveRoughness);
        this.abovePeakDensity.push(val.abovePeakDensity);
        this.belowRoughness.push(val.belowRoughness);
        this.belowPeakDensity.push(val.belowPeakDensity)
      })
       this.two.push(this.one[a].List.length);
       this.three.push(this.one[a].highSpeedStrechDataDetailId) 
      //  for(let b=0;b<this.one[a].List.length;b++){
      //    this.four[a].push(this.one[a].List[b])} 

      }
    })    
  }
  // detail数据
  public async GetTrialDataDetailsss() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/surfacePropertyDataDetails/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      debugger
      this.trialDataDetailss = res;
      console.log(this.trialDataDetailss)
    })    
  }
  classitem(arry1,p){
    let arry=[]
    arry1.map(mapItem=>{
    if (arry.length == 0) {
      arry.push({highSpeedStrechDataDetailId: mapItem[p], List: [mapItem] })
    } else {
       let res = arry.some(item=> {//判断相同Position，有就添加到当前项
        if (item.highSpeedStrechDataDetailId == mapItem[p]) {
          item.List.push(mapItem)
          return true
        }
      })
      if (!res) {//如果没找相同Position添加一个新对象
        arry.push({ highSpeedStrechDataDetailId: mapItem[p], List: [mapItem] })
      }
    } })
    return arry
  }
  d
  edgeThickness1=[]
  edgeThickness2=[]
  edgeThickness3=[]
  public async GetTrialDataDetailssss() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/surfacePropertySizeTolerance/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetailsss = res;
      this.d=this.trialDataDetailsss.length;
this.trialDataDetailsss.map(val=>{this.edgeThickness1.push(val.edgeThickness1);
  this.edgeThickness2.push(val.edgeThickness2);
  this.edgeThickness3.push(val.edgeThickness3)
})
    })    
  }
}
