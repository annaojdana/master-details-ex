import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {
  EmployeesMasterDetailsComponent
} from './components/employees-master-details/employees-master-details.component';
import {CryptoMasterDetailsComponent} from './components/crypto-master-details/crypto-master-details.component';
import {
  EmployeesMasterDetailsComponentModule
} from './components/employees-master-details/employees-master-details.component-module';
import {UsersServiceModule} from './services/users.service-module';
import {
  CryptoMasterDetailsComponentModule
} from './components/crypto-master-details/crypto-master-details.component-module';
import {CryptoServiceModule} from './services/crypto.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{
    path: 'employees-master-details',
    component: EmployeesMasterDetailsComponent
  }, {
    path: 'crypto-master-details',
    component: CryptoMasterDetailsComponent
  }]), EmployeesMasterDetailsComponentModule, UsersServiceModule, CryptoMasterDetailsComponentModule, CryptoServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
