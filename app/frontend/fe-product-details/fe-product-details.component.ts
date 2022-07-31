import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-fe-product-details',
  templateUrl: './fe-product-details.component.html',
  styleUrls: ['./fe-product-details.component.css']
})
export class FeProductDetailsComponent implements OnInit {

  private id : any = null
  productDetail : any;

  constructor(public routes : ActivatedRoute, private ProductService: ProductService) { }

  ngOnInit(): void {
    this.id = this.routes.snapshot.params["id"]
    this.getProductDetail()
  }

  getProductDetail(){
    this.ProductService.getPhone(this.id).subscribe((data)=>{
      this.productDetail = data
    })
  }

}
