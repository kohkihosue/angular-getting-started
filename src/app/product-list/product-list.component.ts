import { Component } from '@angular/core';

import { products } from '../products';
import { clsProduct } from '../shared/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;
  // products: clsProduct = [
  //   {
  //     name: '名称',
  //     price: 100,
  //     description: 'コメント',
  //   },
  //   {
  //     name: '名称1',
  //     price: 1000,
  //     description: 'コメント1',
  //   },
  // ];

  // students = [
  //   { name: '一郎', gender: '男', age: 40 },
  //   { name: '二郎', gender: '男', age: 38 },
  //   { name: '三郎', gender: '男', age: 34 },
  // ];

  share() {
    window.alert('The product has been shared!');
  }

  notify() {
    window.alert('お知らせを受け取ります！');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
