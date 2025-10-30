import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartStatus } from '../cart-status/cart-status';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CartStatus],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
