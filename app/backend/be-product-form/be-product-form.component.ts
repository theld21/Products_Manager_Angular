import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-be-product-form',
  templateUrl: './be-product-form.component.html',
  styleUrls: ['./be-product-form.component.css']
})
export class BeProductFormComponent implements OnInit {

  id: any
  postForm: FormGroup

  constructor(
    private ProductService: ProductService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.postForm = new FormGroup({
      id: new FormControl(0),
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      desc: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      price: new FormControl(0, [
        Validators.required,
        Validators.min(0)
      ]),
      image_url: new FormControl('', [
        Validators.required,
        Validators.pattern(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)
      ]),
      status: new FormControl(0)
    })
  }
  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id']

    if (this.id)
      this.ProductService.getPhone(this.id).subscribe(data => {
        this.postForm.setValue(data)
      })

  }

  onSubmit(obj: any) {
    if (this.id)
      this.ProductService.updatePhone(this.id, obj).subscribe(data => {
        this.router.navigate(['/admin/phones'])
      })

    else
      this.ProductService.createPhone(obj).subscribe(data => {
        this.router.navigate(['/admin/phones'])
      })
  }

}
