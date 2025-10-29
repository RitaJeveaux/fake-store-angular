import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { CategoryList } from '../../components/category-list/category-list';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, RouterLink, CategoryList],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    })
  }

  onCategorySelected(category: string) {
    if (category) {
      this.productService.getProductsByCategory(category).subscribe(data => {
        this.products = data;
      });
    } else {
      this.loadProducts();
    }
  }
}
