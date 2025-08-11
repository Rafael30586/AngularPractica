import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { IProduct } from '../../models/product.model';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  
  productList: IProduct[] = []

  private _apiService = inject(ApiService)
  private _router = inject(Router)

  ngOnInit(): void {
    this._apiService.getProducts().subscribe((data: IProduct[])=>{
      this.productList = data
    })
  }

  navigate(id:number){
    this._router.navigate(['/products',id])
  }


}
