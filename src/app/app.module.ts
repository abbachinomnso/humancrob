import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { contentHeaders } from './common/common.component';

import { MedicationComponent } from './medication/medication.component';
import { ShowdataComponent } from './showdata/showdata.component';
import { EspparseComponent } from './espparse/espparse.component';

const appRoutes: Routes = [
  { path: 'app',       component: AppComponent  },
  { path: 'medication',       component: MedicationComponent },
  { path: '',       component: ShowdataComponent },
  { path: 'esp8266',       component: EspparseComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    MedicationComponent,
    ShowdataComponent,
    EspparseComponent
    ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
