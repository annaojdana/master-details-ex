import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UsersModel } from '../../models/users.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-employees-master-details',
  styleUrls: ['./employees-master-details.component.scss'],
  templateUrl: './employees-master-details.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeesMasterDetailsComponent {
  readonly list$: Observable<UsersModel[]> = this._usersService.getAll();
  private _itemIdSubject: Subject<number> = new Subject<number>();
  public itemId$: Observable<number> = this._itemIdSubject.asObservable();
  readonly details$: Observable<UsersModel> = this.itemId$.pipe(switchMap(data => this._usersService.getOne(data)));

  constructor(private _usersService: UsersService) {
  }

  selectEmployee(id: number): void {
    this._itemIdSubject.next(id);
  }
}
