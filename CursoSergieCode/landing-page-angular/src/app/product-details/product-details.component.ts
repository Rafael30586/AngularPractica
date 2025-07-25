import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, productsList } from '../products/products.mock';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{

  product?: Product
  productList: Product[] = productsList
  loading: boolean = true
  color: string = ''

  constructor(private _route: ActivatedRoute){
    

  }

  ngOnInit(): void {
    setTimeout(()=>{
      this._route.params.subscribe(params => {
      this.product = this.productList.find(product => product.id == params['productId'])
      this.color = this.product?.price as number > 5 ? 'red' : ''
      this.loading = false
    })
    },1500)
  }
}
