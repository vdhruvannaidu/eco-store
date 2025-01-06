import { CommonModule } from '@angular/common';
import { Component, Input, Signal, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Product } from '../../../../shared/models/product.model';
// import { Router, RouterModule } from '@angular/router';
import { Router, RouterLink, RouterModule } from '@angular/router'; // Import RouterLink




@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule,RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
  
})
export class ProductCardComponent {
  @Input() products: Product[] = []; 
  constructor() {}
  ngOnInit() {
    console.log(this.products);
    // Fetch product data from a service or API
    // this.productService.getProducts().subscribe(products => {
    //   this.productList.set(products); 
    // });
    
}
addtocart(product: Product) {
  console.log('Product added to cart:', product);
}
}
