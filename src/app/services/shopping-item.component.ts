import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../services/shopping.service';

@Component({
  selector: 'app-shopping-item',
  templateUrl: 'app-shopping-item.html',
  styleUrls: ['./shopping-item.component.scss'],
})
export class ShoppingItemComponent implements OnInit {
  shoppingItems: any[] = [];

  constructor(private shoppingService: ShoppingService) {}

  ngOnInit() {
    this.shoppingService.getShoppingItems().subscribe(
      (response: any) => {
        this.shoppingItems = response.shoppingItems;
        console.log(this.shoppingItems);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
