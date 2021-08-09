import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AccumulationChartModule } from '@syncfusion/ej2-angular-charts';
import { AppComponent } from './app.component';
import { DashboardLayoutModule } from '@syncfusion/ej2-angular-layouts';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, DashboardLayoutModule, AccumulationChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
