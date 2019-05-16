import {CanDeactivate} from '@angular/router';
import {ProductComponent} from '../product/product.component';

export class UnsavedGuard implements CanDeactivate<ProductComponent> {
  canDeactivate(component: ProductComponent) {
    return window.confirm('You didn\'t save it, are you sure to leave?');
  }

}
