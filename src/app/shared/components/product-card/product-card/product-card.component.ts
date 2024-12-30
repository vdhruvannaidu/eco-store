import { CommonModule } from '@angular/common';
import { Component, Input, Signal, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Product } from '../../../../shared/models/product.model';



@Component({
  selector: 'app-product-card',
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() products: Product[] = []; 

  ngOnInit() {
    // Fetch product data from a service or API
    // this.productService.getProducts().subscribe(products => {
    //   this.productList.set(products); 
    // });
  }
}
