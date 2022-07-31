import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-fe-products',
  templateUrl: './fe-products.component.html',
  styleUrls: ['./fe-products.component.css']
})
export class FeProductsComponent implements OnInit {

  products : any;

  constructor(private ProductService: ProductService) { }

  ngOnInit(): void {
    this.getListProducts()
  }

  getListProducts(){
    this.ProductService.getPhonesForCilent().subscribe((data)=>{
      this.products = data
    })
  }

}
