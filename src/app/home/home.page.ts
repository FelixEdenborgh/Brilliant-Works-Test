// import { Component, OnInit } from '@angular/core';
// import {
//   ShoppingService,
//   MarketplaceResponse,
// } from '../services/shopping.service';

// declare global {
//   interface Array<T> {
//     flat(depth: number): T[];
//     flat(): T[];
//     flat(depth?: number): T[];
//   }
// }

// @Component({
//   selector: 'app-home',
//   templateUrl: 'home.page.html',
//   styleUrls: ['home.page.scss'],
// })
// export class HomePage implements OnInit {
//   shoppingItems: any[] = [];
//   selectedItem: any;

//   constructor(private shoppingService: ShoppingService) {}

//   ngOnInit() {
//     this.shoppingService
//       .getShoppingItems()
//       .subscribe((data: MarketplaceResponse) => {
//         console.log('Response data:', data);
//         const flat = data?.content?.flat;
//         if (flat) {
//           let allItems = flat();
//           this.shoppingItems = allItems
//             .map((item: any) => item.shoppingItem)
//             .filter(Boolean);
//         } else {
//           console.log('No shopping items found in response data');
//         }
//       });
//   }

//   selectItem(item: any) {
//     this.selectedItem = item;
//   }
// }
import { Component, OnInit } from '@angular/core';
import {
  ShoppingService,
  MarketplaceResponse,
} from '../services/shopping.service';

declare global {
  interface Array<T> {
    flat(depth: number): T[];
    flat(): T[];
    flat(depth?: number): T[];
  }
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  shoppingItems: any[] = [];
  selectedItem: any;

  constructor(private shoppingService: ShoppingService) {}

  ngOnInit() {
    this.shoppingService
      .getShoppingItems()
      .subscribe((data: MarketplaceResponse) => {
        console.log('Response data:', data);
        const flat = data?.content?.flat;
        if (flat) {
          let allItems = flat();
          this.shoppingItems = allItems
            .map((item: any) => item.shoppingItem)
            .filter(Boolean);
        } else {
          console.log('No shopping items found in response data');
        }
      });
  }

  selectItem(item: any) {
    this.selectedItem = item;
    this.shoppingService.getShoppingItems().subscribe((data: any) => {
      console.log('Item details:', data);
      this.selectedItem.shoppingItems = data.items;
    });
  }
}
