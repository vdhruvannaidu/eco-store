import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../../shared/components/header/header/header.component';
import { BannerSliderComponent } from '../../../../../shared/components/banner-slider/banner-slider/banner-slider.component';
import { FooterComponent } from '../../../../../shared/components/footer/footer/footer.component';
import { ProductCardComponent } from '../../../../../shared/components/product-card/product-card/product-card.component';
import { Product } from '../../../../../shared/models/product.model';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    BannerSliderComponent,
    FooterComponent,
    ProductCardComponent,
    MatIconModule,
    CommonModule,
    MatButtonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  bestSellerProduct: Product[] = [
      {
        id: 1,
        imageUrl:
          'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg',
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
          'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-02.jpg',
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
          'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-03.jpg',
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
          'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg',
        altText: '',
        name: 'Nomad Tumbler',
        price: 35,
        buttonIcon: 'shopping_cart',
        quantity: 1,
        productUrl: '/product/4',
      },
    ];
  

  addToCart(product: Product) {
    console.log('Product added to cart:', product);
  }
}
