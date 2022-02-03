import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnInit {
  
  // 5. The @Input() decorator indicates that the property value passes in from the component's parent, ProductListComponent
  @Input() product!: Product;
  constructor() {}

  ngOnInit(): void {}
}
