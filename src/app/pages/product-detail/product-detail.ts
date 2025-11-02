import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product-service';
import { Store } from '@ngrx/store';
import * as CartActions from '../../store/cart-actions';
import { Product } from '../../types/types';


@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail implements OnInit {
  product: Product | undefined;
  isZoomed: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private store: Store
  ) { }

  addToCart() {
    if (this.product) {
      this.store.dispatch(CartActions.addProductToCart({ product: this.product }));
      console.log('produto adicionado ao carrinho');
    }
  }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getProductById(+id).subscribe(data => {
        this.product = data;
      })
    }
  }

}
