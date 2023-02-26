import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DECLARATION, IMPORTS_CONF, PROVIDERS_CONF, routesAndRedirect} from "./conf";
import {createNgxs} from "@solenopsys/fl-storage";
import {environment} from "../environments/environment";


@NgModule({

  declarations: [...DECLARATION],
  imports: [
    RouterModule.forChild(routesAndRedirect),
    ...IMPORTS_CONF,
    ...createNgxs(!environment.production,[])
  ],
  providers: [
    ...PROVIDERS_CONF,
    {provide: 'single_start', useValue: false},
    {provide: 'assets_dir', useValue: '/modules/kubernetes'}
  ],

})
export class RemoteEntryModule {}
