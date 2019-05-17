import { Component, Input } from '@angular/core';
import { ProductComponent } from '../product/product.component';

@Component({
    selector: 'product-department',
    templateUrl: 'product-department.component.html'
})
export class ProductDepartmentComponent {
    @Input() product: ProductComponent;
}