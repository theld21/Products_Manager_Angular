import { Component, OnInit } from '@angular/core';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  pjs: any

  constructor(private CvServices: CvService) { }

  ngOnInit(): void {
    this.getPjs()
  }

  getPjs(){
    this.CvServices.getProjects().subscribe(data=>{
      this.pjs = data
    })
  }

}
