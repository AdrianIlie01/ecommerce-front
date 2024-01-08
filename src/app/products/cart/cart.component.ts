import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../products.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{

  constructor(
    private productsService: ProductsService,
    private router: Router,
  ) {
  }

  products!: any;
  image!: string;

  async ngOnInit() {
    this.getAllProductsFromLocalStorage();


  }


  getAllProductsFromLocalStorage(): void {
    const keys = Object.keys(localStorage);

    console.log('keys');
    console.log(keys);

    this.products = keys
      .filter((key) => key.endsWith('-Name'))
      .map((nameKey) => {
        const baseKey = nameKey.slice(0, -5); // Eliminăm "-Name" pentru a obține cheia de bază
        return {
          name: baseKey,
          price: localStorage.getItem(baseKey + '-Price'),
          count: localStorage.getItem(baseKey + '-Count'),
          image: localStorage.getItem(nameKey),
        };
      });
  }

  getThumbnailUrl(image: string) {
    return this.image = this.productsService.getThumbnailUrl(image);
  }

  decreaseValue() {

  }

  increaseValue() {

  }

  deleteProduct(name: string) {

  }



}
