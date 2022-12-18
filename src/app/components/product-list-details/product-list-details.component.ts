import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list-details',
  templateUrl: './product-list-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListDetailsComponent {
  readonly list$: Observable<ProductModel[]> = this._productsService.getAll();
  private _selectedProductIdSubject: Subject<number> = new Subject<number>();
  public selectedProductId$: Observable<number> =
    this._selectedProductIdSubject.asObservable();
  readonly details$: Observable<ProductModel> = this.selectedProductId$.pipe(
    switchMap((id) => this._productsService.getOne(id))
  );

  constructor(private _productsService: ProductsService) {}

  selectProduct(id: number): void {
    this._selectedProductIdSubject.next(id);
  }
}
