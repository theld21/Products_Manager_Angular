import { Component, OnInit } from '@angular/core';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  skills: any
  constructor(private CvServices: CvService) { }

  ngOnInit(): void {
    this.getSkills()
  }

  getSkills(){
    this.CvServices.getSkills().subscribe(data=>{
      this.skills = data
    })
  }

}
