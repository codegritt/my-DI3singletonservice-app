import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { CustomersComponent } from './customers.component';
import { CustomersDetailComponent } from './customers-detail.component';
import { CustomersListComponent } from './customers-list.component';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersService } from './customers.service';


@NgModule({
  imports: [ SharedModule, CustomersRoutingModule ],
  declarations: [
    CustomersComponent, CustomersDetailComponent, CustomersListComponent,
  ],
  providers: [CustomersService]
})
export class CustomersModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/