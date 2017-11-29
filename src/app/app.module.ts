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

const appRoutes: Routes = [
  { path: 'app',       component: AppComponent  },
  { path: 'medication',       component: MedicationComponent },
  { path: '',       component: ShowdataComponent },


];

@NgModule({
  declarations: [
    AppComponent,
    MedicationComponent,
    ShowdataComponent
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
