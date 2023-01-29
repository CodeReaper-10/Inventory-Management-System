import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Products } from 'src/app/models/products.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css','../../../..//node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class AddItemComponent {

  product!: Products;

  constructor (private router: Router, private productServ: ProductsService) { }

  onAddItem(form: NgForm) {
    this.product = new Products(form.value.itemId, form.value.iname, form.value.desc, form.value.price, form.value.units);
    this.productServ.addProduct(this.product).subscribe({
      next: () => {
        alert("Item added successfully.");
        this.router.navigate(['/home']);
      }
    });
  }
}
