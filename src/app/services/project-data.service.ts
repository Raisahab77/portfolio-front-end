import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {

  constructor(private http : HttpClient) { }
  getData(){
    return this.http.get(`https://vikas-rai-portfolio.herokuapp.com/`)
  }
  getDataById(id:any){
    return this.http.get(`https://vikas-rai-portfolio.herokuapp.com/${id}`)
  }
}
