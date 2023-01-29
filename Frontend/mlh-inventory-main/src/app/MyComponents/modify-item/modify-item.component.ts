import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/models/products.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-modify-item',
  templateUrl: './modify-item.component.html',
  styleUrls: ['./modify-item.component.css','../../../..//node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class ModifyItemComponent {
  allProducts: Array<Products> = [];
  constructor (private router: Router, private productServ: ProductsService) {
    this.productServ.getAllProducts().subscribe(allProds => {
      this.allProducts = allProds;
    });
   }

  onModify(id: number) {
    this.router.navigate(["/addItems"]);
    alert("Enter " + id + " as Item ID.");
  }

  onDelete(id: number) {
    this.productServ.removeProduct(id).subscribe(() => {
      alert("Item with ID: " + id + " has been deleted successfully.");
      this.router.navigate(["/home"]);
    })
  }
}
