import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ShoppingItem {
  id: number;
  name: string;
  price: number;
  space: {
    id: number;
    title: string;
    description: string;
    title_en: string;
    description_en: string;
    space: any;
    posterImage: {
      id: number;
      imageUrl: string;
      size: number;
    };
    creator: {
      id: number;
      firstName: string;
      lastName: string;
      profileImage: {
        id: number;
        imageUrl: string;
      };
    };
    type: string;
    created: number;
  };
}

// export interface MarketplaceResponse {
//   id: number;
//   items: ShoppingItem[];
//   content: ShoppingItem[];
//   space: any; // Replace 'any' with the type of the space object, if known
//   shoppingItems: ShoppingItem[];
// }

// @Injectable({
//   providedIn: 'root',
// })
// export class ShoppingService {
//   private apiUrl =
//     'https://api.winnerheads.com/api/shopitems/{ shopping-item-id}';

//   shoppingItems: ShoppingItem[] = [];

//   constructor(private http: HttpClient) {}

//   getShoppingItems(): Observable<MarketplaceResponse> {
//     return this.http.get<MarketplaceResponse>(this.apiUrl);
//   }

//   getShoppingItemById(id: string): Observable<ShoppingItem> {
//     const url = `${this.apiUrl}/${id}`;
//     return this.http.get<ShoppingItem>(url);
//   }
// }

export interface MarketplaceResponse {
  id: number;
  items: ShoppingItem[];
  content: ShoppingItem[];
  space: any; // Replace 'any' with the type of the space object, if known
  shoppingItems: ShoppingItem[];
}

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
  private apiUrl =
    'https://api.winnerheads.com/api/marketplace/getMarketplaceByIdString/winnerheads/shoppingItems';

  shoppingItems: ShoppingItem[] = [];

  constructor(private http: HttpClient) {}

  getShoppingItems(): Observable<MarketplaceResponse> {
    return this.http.get<MarketplaceResponse>(this.apiUrl);
  }

  getShoppingItemById(id: string): Observable<ShoppingItem> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<ShoppingItem>(url);
  }
}
