import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../../shared/components/header/header/header.component';
import { BannerSliderComponent } from '../../../../../shared/components/banner-slider/banner-slider/banner-slider.component';
import { FooterComponent } from '../../../../../shared/components/footer/footer/footer.component';
import { ProductCardComponent } from '../../../../../shared/components/product-card/product-card/product-card.component';
import { Product } from '../../../../../shared/models/product.model';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    BannerSliderComponent,
    FooterComponent,
    ProductCardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  bestSellerProduct: () => Product[] = () => {
    return [
      {
        imageUrl:
          'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg',
        altText: '',
        name: 'Earthen Bottle',
        price: 35,
        buttonIcon: 'shopping_cart',
      },
      {
        imageUrl:
          'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-02.jpg',
        altText: '',
        name: 'Nomad Tumbler',
        price: 35,
        buttonIcon: 'shopping_cart',
      },
      {
        imageUrl:
          'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-03.jpg',
        altText: '',
        name: 'Nomad Tumbler',
        price: 35,
        buttonIcon: 'shopping_cart',
      },
      {
        imageUrl:
          'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg',
        altText: '',
        name: 'Nomad Tumbler',
        price: 35,
        buttonIcon: 'shopping_cart',
      },
    ];
  };
}
