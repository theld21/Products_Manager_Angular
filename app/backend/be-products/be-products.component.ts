import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-be-products',
  templateUrl: './be-products.component.html',
  styleUrls: ['./be-products.component.css']
})
export class BeProductsComponent implements OnInit {

  products : any;

  constructor(private ProductService: ProductService) { }

  ngOnInit(): void {
    this.getListProducts()
  }

  getListProducts(){
    this.ProductService.getPhones().subscribe((data)=>{
      this.products = data
    })
  }

  remove(id : number){
    if (confirm("Bạn có muốn xoá?")) {
      this.ProductService.deletePhone(id).subscribe((data)=>{
        this.getListProducts()
      })
    }
  }

  ChangeStatus(newStatus: number, obj: any){
    this.ProductService.changeStatusStudent(status, {
      ...obj,
      status: newStatus
    }).subscribe((data)=>{
      this.getListProducts()
    })
  }

}
