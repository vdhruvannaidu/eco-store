import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from '../../../../../shared/components/header/header/header.component';
import { BannerSliderComponent } from '../../../../../shared/components/banner-slider/banner-slider/banner-slider.component';
import { FooterComponent } from '../../../../../shared/components/footer/footer/footer.component';
import { ProductCardComponent } from '../../../../../shared/components/product-card/product-card/product-card.component';
import { Product } from '../../../../../shared/models/product.model';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { CartComponent } from '../../../../cart/components/cart/cart.component';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    BannerSliderComponent,
    FooterComponent,
    ProductCardComponent,
    MatIconModule,
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    CartComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  @ViewChild(CartComponent) cart!: CartComponent;
  bestSellerProduct: Product[] = [
    {
      id: 1,
      imageUrl:
        'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
      altText: '',
      name: 'Earthen Bottle',
      price: 35,
      buttonIcon: 'shopping_cart',
      quantity: 1,
      productUrl: '/product/1',
    },
    {
      id: 2,
      imageUrl:
        'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg',
      altText: '',
      name: 'Nomad Tumbler',
      price: 35,
      buttonIcon: 'shopping_cart',
      quantity: 1,
      productUrl: '/product/2',
    },
    {
      id: 3,
      imageUrl:
        'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg',
      altText: '',
      name: 'Nomad Tumbler',
      price: 35,
      buttonIcon: 'shopping_cart',
      quantity: 1,
      productUrl: '/product/3',
    },
    {
      id: 4,
      imageUrl:
        'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg',
      altText: '',
      name: 'Nomad Tumbler',
      price: 35,
      buttonIcon: 'shopping_cart',
      quantity: 1,
      productUrl: '/product/4',
    },
  ];
  showSidenav: boolean = false;

  addToCart(product: Product) {
    console.log('Product added to cart:', product);
    this.showSidenav = true;
    this.cart.toggleCart(true);
  }
}
