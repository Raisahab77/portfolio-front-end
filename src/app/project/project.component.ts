import { Component, OnInit } from '@angular/core';
import { ProjectDataService } from '../services/project-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(private service:ProjectDataService, private router:ActivatedRoute) { }
  project_details:any;
  ngOnInit(): void {
    this.service.getDataById(this.router.snapshot.params['id']).subscribe((response)=>{
      this.project_details = response;
      console.log(response);
    },(error)=>{
      console.log('Error is',error);
    })
  }
}
