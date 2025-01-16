import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { NgxSplideModule } from 'ngx-splide';
import { NgxSplideComponent } from 'ngx-splide';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ButtonComponent } from './shared/components/button/button/button.component';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NgxSplideModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'eco-store';
  newItemEvent :any;
  @ViewChild('splideRef', { static: false }) splideComponent!: NgxSplideComponent;
  @ViewChild('sidenav') sidenav!: MatSidenav;

  splideOptions = {
    type: 'loop',
    perPage: 5,
    perMove: 1,
    gap: '1rem',
    pagination: false,
    arrows: false,
    breakpoints: {
      1024: { perPage: 3 },
      768: { perPage: 2 },
      480: { perPage: 1 },
    },
  };
  products = [
    {
      id: 1,
      name: '24/7® Classic Unlined Minimizer Bra',
      image: 'assets/images/shoe4.jpg',
      oldPrice: 76,
      newPrice: 59,
      rating: '★★★★☆',
      reviews: 1000,
      feature: 'Reduces up to 2"',
    },
    {
      id: 2,
      name: 'ComfortStretch Smoothing Full Coverage Bra',
      image: 'assets/images/shoe5.jpg',
      oldPrice: 78,
      newPrice: 65,
      rating: '★★★★☆',
      reviews: 678,
      feature: 'Front & Back Smoothing',
    },
    {
      id: 3,
      name: 'ComfortStretch Smoothing Full Coverage Bra',
      image: 'assets/images/shoe5.jpg',
      oldPrice: 78,
      newPrice: 65,
      rating: '★★★★☆',
      reviews: 678,
      feature: 'Front & Back Smoothing',
    },
    {
      id: 4,
      name: 'ComfortStretch Smoothing Full Coverage Bra',
      image: 'assets/images/shoe5.jpg',
      oldPrice: 78,
      newPrice: 65,
      rating: '★★★★☆',
      reviews: 678,
      feature: 'Front & Back Smoothing',
    },
    {
      id: 5,
      name: 'ComfortStretch Smoothing Full Coverage Bra',
      image: 'assets/images/shoe5.jpg',
      oldPrice: 78,
      newPrice: 65,
      rating: '★★★★☆',
      reviews: 678,
      feature: 'Front & Back Smoothing',
    },
    // Add more product objects
  ];

  toggleSidenav(event: any) {
    console.log(event);
    this.sidenav.toggle();
  }

  

  // goToPreviousSlide(): void {
  //   const splide = this.splideComponent.splide;
  //   splide?.go('<');
  // }

  // // Method to go to the next slide
  // goToNextSlide(): void {
  //   const splide = this.splideComponent.splide;
  //   splide?.go('>');
  // }
}
