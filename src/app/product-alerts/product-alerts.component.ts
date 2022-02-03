import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnInit {
  // 5. The @Input() decorator indicates that the property value passes in from the component's parent, ProductListComponent
  // @Input() product!: Product; => Semble être la même chose que le @Input ci dessous
  @Input() product: Product | undefined;
  // 2. The @Output() decorator allows the ProductAlertsComponent to emit an event when the value of the notify property changes
  @Output() notify = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
