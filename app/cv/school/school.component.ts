import { Component, OnInit } from '@angular/core';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

  schools: any
  constructor(private CvServices:CvService) { }

  ngOnInit(): void {
    this.getSchools()
  }

  getSchools(){
    this.CvServices.getSchools().subscribe(data=>{
      this.schools = data
    })
  }

}
