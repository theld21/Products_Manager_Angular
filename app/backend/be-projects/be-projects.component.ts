import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-be-projects',
  templateUrl: './be-projects.component.html',
  styleUrls: ['./be-projects.component.css']
})
export class BeProjectsComponent implements OnInit {

  tableItem: any
  modalValue: any
  flag = true // isUpdating

  constructor(
    private CvService: CvService,
  ) {
    this.modalValue = new FormGroup({
      id: new FormControl(-1, Validators.required),
      name: new FormControl('', Validators.required),
      start_date: new FormControl('', Validators.required),
      end_date: new FormControl('', Validators.required),
      desc: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
    this.getProjects()
  }

  getProjects(){
    this.CvService.getProjects().subscribe(data => {
      this.tableItem = data
      console.log(data);

    })
  }

  create(){
    this.modalValue.setValue({
      id: -1,
      name: '',
      start_date: '',
      end_date: '',
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
      this.CvService.deleteProject(id).subscribe(data => {
        this.getProjects()
      })
  }

  onSubmitModal(obj: any) {
    if (this.flag)
      this.CvService.updateProject(obj).subscribe(data => {
        this.getProjects()
      })
    else
      this.CvService.createProject(obj).subscribe(data => {
        this.getProjects()
      })
  }

}

