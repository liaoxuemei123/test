import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-fld-table',
  templateUrl: './fld-table.component.html',
  styleUrls: ['./fld-table.component.css']
})
export class FldTableComponent implements OnInit {
  public materialId
  trialDataDetail=[{}]
  trialDataDetails=[{}]
  table=[{
    table:"table1",
    name:"trialDataDetails",
    one:["测试机构","执行标准","试验设备","试验方法"],
    width:["200px","200px","200px","300px",],
    key:["testOrganization","standard","equipment","testMethod"]
},
{table:"table2",
  name:"trialDataDetail",
  one:["试样宽度/mm","次应变","主应变"],
  width:["200px","200px","200px"],
  key:["specimenWidth","secondaryStrain","mainStrain"]
,
}]
  constructor(private router: Router,
    public http: HttpClient,) { }

  ngOnInit() { this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
    this.GetTrialDataDetails();
    this.GetTrialDataDetailss();
  }
  public async GetTrialDataDetails() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/fLDDataDetailItems/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetail = res
      // console.log(this.trialDataDetail)
    })    
  }
  public async GetTrialDataDetailss() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/fLDDataDetails/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetails = res
      // console.log(this.trialDataDetail)
    })    
  }
}
