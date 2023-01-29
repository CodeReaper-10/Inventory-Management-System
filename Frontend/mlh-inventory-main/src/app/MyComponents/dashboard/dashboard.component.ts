import { Component } from '@angular/core';
import { Products } from 'src/app/models/products.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css',"../../../..//node_modules/bootstrap/dist/css/bootstrap.min.css"]
})
export class DashboardComponent {
  allProducts: Array<Products> = [];
  totalStockAvailable: number = 0;
  totalStockValue: number = 0;
  constructor(private productServ: ProductsService) {}

  ngOnInit(): void {
    this.productServ.getAllProducts().subscribe(allProds => {
      this.allProducts = allProds;
    });

    this.productServ.getTotalStock().subscribe(totStock => {
      this.totalStockAvailable = totStock;
    });

    this.productServ.getTotalStockValue().subscribe(stockVal => {
      this.totalStockValue = stockVal;
    });
   }
}
