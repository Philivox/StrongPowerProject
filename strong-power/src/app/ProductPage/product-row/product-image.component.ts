import { Input, HostBinding, Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';

@Component({
    selector: 'product-image',
    template: `
    <img class="product-image" [src]="product.imageUrl">`
})
export class ProductImageComponent {
    @Input() product: ProductComponent;
    @HostBinding('attr.class') cssClass = 'ui small image';
}