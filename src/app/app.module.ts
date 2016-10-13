import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { MetricsComponent } from './metrics/metrics.component';
import { DataComponent } from './data/data.component';
import { GeoComponent } from './geo/geo.component';

@NgModule({
  declarations: [
    AppComponent,
    MetricsComponent,
    DataComponent,
    GeoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'metrics',
        component: MetricsComponent
      },
      {
        path: 'data',
        component: DataComponent
      },
      {
        path: 'geo',
        component: GeoComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
