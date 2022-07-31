import { Component, OnInit } from '@angular/core';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  info: any
  table: any

  constructor(private CvServices: CvService) { }

  ngOnInit(): void {
    this.getInfo()
  }

  getInfo(){
    this.CvServices.getInfo().subscribe(data=>{
      this.info = data
    })
    this.CvServices.getInfoTable().subscribe(data=>{
      this.table = data
    })
  }

}
