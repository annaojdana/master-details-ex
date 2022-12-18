import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CryptoModel } from '../../models/crypto.model';
import { CryptoService } from '../../services/crypto.service';

@Component({
  selector: 'app-crypto-master-details',
  styleUrls: ['./crypto-master-details.component.scss'],
  templateUrl: './crypto-master-details.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoMasterDetailsComponent {
  readonly list$: Observable<CryptoModel[]> = this._cryptoService.getAll();
  private _cryptoItemSubject: Subject<CryptoModel> = new Subject<CryptoModel>();
  public cryptoItem$: Observable<CryptoModel> = this._cryptoItemSubject.asObservable();
  readonly details$: Observable<CryptoModel> = this.cryptoItem$;

  constructor(private _cryptoService: CryptoService) {
  }

  selectCrypto(symbol: CryptoModel): void {
    this._cryptoItemSubject.next(symbol);
  }
}
