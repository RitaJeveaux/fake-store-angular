import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShoppingCart } from './shopping-cart';
import { of } from 'rxjs';

describe('ShoppingCart', () => {
  let component: ShoppingCart;
  let fixture: ComponentFixture<ShoppingCart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingCart],
    }).compileComponents();

    fixture = TestBed.createComponent(ShoppingCart);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should apply overflow styles to long product names', () => {
    const longTitle = 'This is a very long product title that should overflow';
    component.cartItems = of([{
      id: 1,
      title: longTitle,
      price: 100,
      quantity: 1,
      image: ''
    }]);
    fixture.detectChanges();

    const productNameCell = fixture.nativeElement.querySelector('.product-name');
    expect(productNameCell).toBeTruthy();

    const styles = getComputedStyle(productNameCell);
    expect(styles.maxWidth).toBe('300px');
    expect(styles.whiteSpace).toBe('nowrap');
    expect(styles.overflow).toBe('hidden');
    expect(styles.textOverflow).toBe('ellipsis');
  });
});
