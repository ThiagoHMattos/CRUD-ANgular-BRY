import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Empresa } from 'src/app/empresa';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-empresas-editar',
  templateUrl: './empresas-editar.component.html',
  styleUrls: ['./empresas-editar.component.css']
})
export class EmpresasEditarComponent implements OnInit {
  id: any;
  data:any;
  empresa = new Empresa();
  constructor(private route:ActivatedRoute, private dataService:DataService) { }

  ngOnInit(): void {
    //console.log(this.route.snapshot.params['id'])
    this.id = this.route.snapshot.params['id'];
    this.getData();
  }


  getData() {
    this.dataService.getEmpresapelaid(this.id).subscribe(res =>{
      //console.log(res);
      this.data = res;
      this.empresa = this.data;
    })

  }
  updateEmpresa() {
    this.dataService.updateData(this.id, this.empresa).subscribe(res => {

    })
  }


}



