import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';
import {
  ShoppingService,
  MarketplaceResponse,
} from './services/shopping.service';

declare global {
  interface Array<T> {
    flat(depth: number): T[];
    flat(): T[];
    flat(depth?: number): T[];
  }
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  shoppingItems: any[] = [];
  selectedItem: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private shoppingService: ShoppingService
  ) {
    this.initializeApp();
    this.getShoppingItems();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  getShoppingItems() {
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
    console.log('Selected item:', item);
    this.selectedItem = item;
    this.selectedItem.shoppingItems = item.items;
  }
}
