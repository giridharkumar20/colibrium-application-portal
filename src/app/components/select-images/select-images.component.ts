import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-select-images',
  templateUrl: './select-images.component.html',
  styleUrls: ['./select-images.component.scss']
})
export class SelectImagesComponent implements OnInit {
  childData = {
    "title" : "Select Images",
    "epname": "app-select-images",
    "thisYear": false,
    "all": true,
    "slectb": false,
    "viewarchives": false,
    "search": false,
    "filter": false,
    "refresh": true,
    "floppy": false,
    "donload": false,
    "chart": false,
    "expand": true,
    "drag": true,
  }
  customOptions: OwlOptions = {
    // autoplay: true,
    margin: 10,
    dots: false,
    nav: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 3,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      }
    }
  }

  selectImages = [
    {
      img: 'assets/select-img1.jpg',
      title: 'Health',
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      link: 'Read more'
    },
    {
      img: 'assets/select-img2.jpg',
      title: 'Financials',
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      link: 'Read more'
    },
    {
      img: 'assets/select-img3.jpg',
      title: 'Intellactuals',
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      link: 'Read more'
    },
    {
      img: 'assets/select-img1.jpg',
      title: 'Health',
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      link: 'Read more'
    },
    {
      img: 'assets/select-img2.jpg',
      title: 'Financials',
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      link: 'Read more'
    },
    {
      img: 'assets/select-img3.jpg',
      title: 'Intellactuals',
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      link: 'Read more'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
