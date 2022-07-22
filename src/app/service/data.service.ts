import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empresa } from '../empresa';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getData() {
    return this.httpClient.get('http://127.0.0.1:8000/api/empresa/index')
  }

  insertData(data:Empresa) {
    return this.httpClient.post('http://127.0.0.1:8000/api/empresa/store', data);
  }

  deleteData(id:any) {
    return this.httpClient.delete('http://127.0.0.1:8000/api/empresa/delete/'+id);
  }
// escrevi como edit mas era pra ser show.
  getEmpresapelaid(id:any) {
    return this.httpClient.get('http://127.0.0.1:8000/api/empresa/edit/' +id);
  }

  updateData(id: string, data: any) {
    return this.httpClient.put('http://127.0.0.1:8000/api/empresa/update/'+id, data);
  }

}







