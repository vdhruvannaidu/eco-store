import { CommonModule } from '@angular/common';
import { Component, Input, output, Signal, signal, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Product } from '../../../../shared/models/product.model';
import { Router, RouterLink, RouterModule } from '@angular/router'; // Import RouterLink
import { CartComponent } from '../../../../features/cart/components/cart/cart.component';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, RouterLink, CartComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() products: Product[] = [];
  closeSidebar = output<boolean>(); 
  addToCart(product: Product) {
    console.log('Product added to cart:', product);
    this.toggleCart(true)
  }

  toggleCart(isCartOpen: boolean) {
    const cartSidebar = document.getElementById("cart-sidebar");
    const cartBackdrop = document.getElementById("cart-backdrop");
  
    if (isCartOpen) {
      cartSidebar?.classList.remove("translate-x-full");
      cartBackdrop?.classList.remove("hidden");
    } else {
      console.log('Cart closed');
      cartSidebar?.classList.add("translate-x-full");
      cartBackdrop?.classList.add("hidden");
    }
  }

  cartClosed(event: boolean) {
    if(!event) { 
      this.toggleCart(false);
     }
  }
  
}
