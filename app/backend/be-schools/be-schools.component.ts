import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-be-schools',
  templateUrl: './be-schools.component.html',
  styleUrls: ['./be-schools.component.css']
})
export class BeSchoolsComponent implements OnInit {

  tableItem: any
  modalValue: any
  flag = true // isUpdating

  constructor(
    private CvService: CvService,
  ) {
    this.modalValue = new FormGroup({
      id: new FormControl(-1, Validators.required),
      name: new FormControl('', Validators.required),
      start_year: new FormControl('', Validators.required),
      desc: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
    this.getSchools()
  }

  getSchools(){
    this.CvService.getSchools().subscribe(data => {
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
      this.CvService.deleteSchool(id).subscribe(data => {
        this.getSchools()
      })
  }

  onSubmitModal(obj: any) {
    if (this.flag)
      this.CvService.updateSchool(obj).subscribe(data => {
        this.getSchools()
      })
    else
      this.CvService.createSchool(obj).subscribe(data => {
        this.getSchools()
      })
  }

}

