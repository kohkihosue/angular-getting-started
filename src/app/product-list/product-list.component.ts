import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;

  students = [
    { name: '一郎', gender: '男', age: 40 },
    { name: '二郎', gender: '男', age: 38 },
    { name: '三郎', gender: '男', age: 34 },
  ];

  share() {
    window.alert('The product has been shared!');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
