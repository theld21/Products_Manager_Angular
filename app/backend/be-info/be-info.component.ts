import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-be-info',
  templateUrl: './be-info.component.html',
  styleUrls: ['./be-info.component.css']
})

export class BeInfoComponent implements OnInit {

  postForm: FormGroup
  tableItem: any
  modalValue: any
  flag = true // isUpdating

  constructor(
    private router: Router,
    private CvService: CvService,
  ) {
    this.postForm = new FormGroup({
      avatar: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      short_desc: new FormControl('', Validators.required),
      desc: new FormControl('', Validators.required)
    })
    this.modalValue = new FormGroup({
      id: new FormControl(-1, Validators.required),
      name: new FormControl('', Validators.required),
      value: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
    this.getInfo()
    this.getInfoTable()
  }

  getInfo(){
    this.CvService.getInfo().subscribe(data => {
      this.postForm.setValue(data)
    })
  }

  getInfoTable(){
    this.CvService.getInfoTable().subscribe(data => {
      this.tableItem = data

    })
  }

  onSubmit(obj: any) {
    this.CvService.updateInfo(obj).subscribe(data => {
      this.router.navigate(['/admin/'])
    })
  }

  create(){
    this.modalValue.setValue({
      id: -1,
      name: '',
      value: ''
    })
    this.flag = false
  }

  edit(obj: any){
    this.modalValue.setValue(obj)
    this.flag = true
  }

  remove(id: number) {
    this.CvService.deleteInfoTable(id).subscribe(data => {
      this.getInfoTable()
    })
  }

  onSubmitTable(obj: any) {
    if (this.flag)
      this.CvService.updateInfoTable(obj).subscribe(data => {
        this.getInfoTable()
      })
    else
      this.CvService.createInfoTable(obj).subscribe(data => {
        this.getInfoTable()
      })
  }

}

