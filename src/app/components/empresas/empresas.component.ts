import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/empresa';
import { DataService } from 'src/app/service/data.service';


@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {
  empresas:any;
  empresa = new Empresa();

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getEmpresasData();
  }


  getEmpresasData(){
    this.dataService.getData().subscribe(res => {
      this.empresas = res;
    });

  }
  insertData() {
    this.dataService.insertData(this.empresa).subscribe(res =>{
      this.getEmpresasData();
    })
  }


  deleteData(id: any) {
    this.dataService.deleteData(id).subscribe(res =>{
      this.getEmpresasData();
    });
  }

}
