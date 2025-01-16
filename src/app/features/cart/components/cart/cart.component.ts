import { CommonModule } from '@angular/common';
import { Component, Input, Output, output } from '@angular/core';
import { MatDrawer, MatDrawerContainer } from '@angular/material/sidenav';

@Component({
  selector: 'app-cart',
  imports: [MatDrawer, MatDrawerContainer, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  @Input() isCartOpen:boolean = false;
  cartClosed = output<boolean>();


  toggleCart(isCartOpen: boolean) {
    const cartSidebar = document.getElementById("cart-sidebar");
    const cartBackdrop = document.getElementById("cart-backdrop");
  
    if (isCartOpen) {
      cartSidebar?.classList.remove("translate-x-full");
      cartBackdrop?.classList.remove("hidden");
      document.body.classList.add('overflow-hidden');
    } else {
      cartSidebar?.classList.add("translate-x-full");
      cartBackdrop?.classList.add("hidden");
      document.body.classList.remove('overflow-hidden');
    }
  }

  emitCartClosed() {
    this.cartClosed.emit(true);
  }
}
