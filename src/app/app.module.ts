import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ChooseCategoryComponent } from './choose-category/choose-category.component';
import { AbousUsComponent } from './abous-us/abous-us.component';
import { ClinicsTypeComponent } from './clinics-type/clinics-type.component';
import { ClinicComponent } from './clinic/clinic.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { DataService} from './shared/dataservice.service'
import { HttpClientModule } from '@angular/common/http';
import { PharmacyDetailsComponent } from './pharmacy/pharmacy-details/pharmacy-details.component';
import { ClinicDetailsComponent } from './clinic/clinic-details/clinic-details.component';
import { DiseasesComponent } from './diseases/diseases.component';
import { DiseaseDetailsComponent } from './diseases/disease-details/disease-details.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ReadMoreComponent } from './shared/read-more/read-more.component'
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ChooseCategoryComponent,
    AbousUsComponent,
    ClinicsTypeComponent,
    ClinicComponent,
    PharmacyComponent,
    PharmacyDetailsComponent,
    ClinicDetailsComponent,
    DiseasesComponent,
    DiseaseDetailsComponent,
    ReadMoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    DataService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
