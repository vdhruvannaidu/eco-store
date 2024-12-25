import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { MatButtonModule } from './material'; // Import from the central file
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NgxSplideModule } from 'ngx-splide';
import { NgxSplideComponent } from 'ngx-splide';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    NgxSplideModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'eco-store';
  @ViewChild('splideRef', { static: false }) splideComponent!: NgxSplideComponent;
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
