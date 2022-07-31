import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-be-skills',
  templateUrl: './be-skills.component.html',
  styleUrls: ['./be-skills.component.css']
})
export class BeSkillsComponent implements OnInit {

  tableItem: any
  modalValue: any
  flag = true // isUpdating

  constructor(
    private CvService: CvService,
  ) {
    this.modalValue = new FormGroup({
      id: new FormControl(-1, Validators.required),
      name: new FormControl('', Validators.required),
      score: new FormControl('', Validators.required),
      icon: new FormControl('', Validators.required),
      desc: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
    this.getSkills()
  }

  getSkills(){
    this.CvService.getSkills().subscribe(data => {
      this.tableItem = data
    })
  }

  create(){
    this.modalValue.setValue({
      id: -1,
      name: '',
      score: '',
      icon: '',
      desc: ''
    })
    this.flag = false
  }

  edit(obj: any){
    this.modalValue.setValue(obj)
    this.flag = true
  }

  remove(id: number) {
    if(confirm("Bạn có muốn xoá trường này?"))
      this.CvService.deleteSkill(id).subscribe(data => {
        this.getSkills()
      })
  }

  onSubmitModal(obj: any) {
    if (this.flag)
      this.CvService.updateSkill(obj).subscribe(data => {
        this.getSkills()
      })
    else
      this.CvService.createSkill(obj).subscribe(data => {
        this.getSkills()
      })
  }

}
