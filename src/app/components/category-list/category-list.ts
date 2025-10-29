import { Component, EventEmitter, Output, inject, ɵgetOutputDestroyRef } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CategoryService } from '../../services/category-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-list',
  imports: [CommonModule],
  templateUrl: './category-list.html',
  styleUrl: './category-list.css',
})
export class CategoryList {
  @Output() categorySelected = new EventEmitter<string>();
  private categoryService = inject(CategoryService);
  categories = toSignal(this.categoryService.getCategories(), { initialValue: [] });

  selectCategory(category: string) {
    this.categorySelected.emit(category);
  }

}
