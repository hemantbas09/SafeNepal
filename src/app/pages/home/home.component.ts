import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  slides = [
    { id: 1, image: 'assets/images/slider/slider-2.jpg' },
    { id: 2, image: 'assets/images/slider/slider-1.jpg' },
    { id: 3, image: 'assets/images/slider/slider-2.jpg' },
  ];

  currentSlideIndex = 0;

  previousSlide() {
    this.currentSlideIndex =
      (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
  }

  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }
}
