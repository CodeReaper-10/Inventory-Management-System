import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  path: string = "http://localhost:8080/products";
  constructor(private http: HttpClient) { }

  public addProduct(product: Products) {
    return this.http.post<Products>(this.path + '/add', product);
	}
	
	public getProductById(id: number) {
		return this.http.get<Products>(this.path + '/getById/' + id);
	}
	
	public getAllProducts() {
		return this.http.get<Array<Products>>(this.path + '/getAll');
	}
	
	public updateProduct(product: Products) {
		return this.http.post<string>(this.path + '/update', product);
	}
	
	public removeProduct(id: number) {
		return this.http.delete<string>(this.path + '/delete/' + id);
	}
	
	public getTotalStock() {
		return this.http.get<number>(this.path + '/getTotalStock');
	}
	
	public getTotalStockValue() {
		return this.http.get<number>(this.path + '/getTotalStockValue');
	}
}
