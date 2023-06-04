/*
 * This RemoteEntryModule is imported here to allow TS to find the Module during
 * compilation, allowing it to be included in the built bundle. This is required
 * for the Module Federation Plugin to expose the Module correctly.
 * */
import {NgModule} from '@angular/core';

import {RouterModule} from '@angular/router';
import {BootstrapComponent, GridState} from "@solenopsys/ui-templates";
import {ClusterState} from "@solenopsys/fl-clusters";
import {RowsState} from "@solenopsys/ui-lists";
import {HStreamService, HStreamsState, StreamsPool, WsPool} from "@solenopsys/fl-hyperstreams";
import {APP_BASE_HREF} from "@angular/common";
import {DECLARATION, IMPORTS_CONF, PROVIDERS_CONF, ROUTES_DEV} from "./conf";
import {TABLES} from "./tables.config";


export const STATES=  [
     ClusterState,
       RowsState,
      GridState,
      HStreamsState
    ];

@NgModule({
  declarations: [
    ...DECLARATION
  ],
  imports: [
    RouterModule.forRoot(ROUTES_DEV),
    ...IMPORTS_CONF,
  ],
  providers: [...PROVIDERS_CONF,WsPool,HStreamService,StreamsPool,
    {provide: 'tables', useValue: TABLES},
    {provide: 'assets_dir', useValue: ''},
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [BootstrapComponent],
})
export class AppModule {}
