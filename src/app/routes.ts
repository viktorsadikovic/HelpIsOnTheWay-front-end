import { HomeComponent } from './home/home.component'
import { ChooseCategoryComponent } from './choose-category/choose-category.component'
import { AbousUsComponent } from './abous-us/abous-us.component'
import { ClinicsTypeComponent } from './clinics-type/clinics-type.component'
import { ClinicComponent } from './clinic/clinic.component'
import { PharmacyComponent } from './pharmacy/pharmacy.component'
import { PharmacyDetailsComponent } from './pharmacy/pharmacy-details/pharmacy-details.component'
import { Routes } from '@angular/router'
import { ClinicDetailsComponent } from './clinic/clinic-details/clinic-details.component'
import { DiseasesComponent } from './diseases/diseases.component'
import { DiseaseDetailsComponent } from './diseases/disease-details/disease-details.component'

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'chooseCategory', component: ChooseCategoryComponent },
  { path: 'about-us', component: AbousUsComponent },
  { path: 'clinics', component:  ClinicsTypeComponent},
  { path: 'clinics/:type/:id', component: ClinicDetailsComponent },
  { path: 'clinics/:type', component: ClinicComponent },
  { path: 'pharmacies', component: PharmacyComponent },
  { path: 'pharmacies/:id', component: PharmacyDetailsComponent },
  { path: 'diseases', component: DiseasesComponent },
  { path: 'diseases/:id', component: DiseaseDetailsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
]
