import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl: string = 'https://fakestoreapi.com/products'

  constructor(private _httpClient: HttpClient) { }

  public getAllProducts(): Observable<IProduct[]>{ // Devuelve un observable de productos
    
    return this._httpClient.get<IProduct[]>(`${this.baseUrl}`)
  }

  public getProductById(id: number): Observable<IProduct>{ // Devuelve un observable de un solo producto
    return this._httpClient.get<IProduct>(`${this.baseUrl}/${id}`)
  }

  public getAllCategories(): Observable<Category[]>{ // Devuelve un observable de todasd las categorías
    return this._httpClient.get<Category[]>(`${this.baseUrl}/categories`)
  }

  public newProduct(product: IProduct): Observable<IProduct>{ // Devuelve un observable de un producto
    return this._httpClient.post<IProduct>(`${this.baseUrl}`, product)
  }

  public updateProduct(id: number, product: IProduct): Observable<IProduct>{
    return this._httpClient.put<IProduct>(`${this.baseUrl}/${id}`,product)
  }

  public deleteProduct(id: number): Observable<IProduct>{
    return this._httpClient.delete<IProduct>(`${this.baseUrl}/${id}`)
  }
}
