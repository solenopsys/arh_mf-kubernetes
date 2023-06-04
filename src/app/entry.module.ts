import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DECLARATION, IMPORTS_CONF, PROVIDERS_CONF, routesAndRedirect} from "./conf";


@NgModule({

  declarations: [...DECLARATION],
  imports: [
    RouterModule.forChild(routesAndRedirect),
    ...IMPORTS_CONF
  ],
  providers: [
    ...PROVIDERS_CONF,
    {provide: 'assets_dir', useValue: '/modules/mf-kubernetes'}
  ],

})
export class RemoteEntryModule {}
