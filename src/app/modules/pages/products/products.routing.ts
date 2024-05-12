import { Route } from '@angular/router';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { IndividualsComponent } from './individuals/individuals.component';
import { ProfessionalsComponent } from './professionals/professionals.component';
import { ApexProComponent } from './apex-pro/apex-pro.component';
import { ApexVrComponent } from './apex-vr/apex-vr.component';
import { AnalyticComponent } from './analytic/analytic.component';
import { TrainingStationComponent } from './training-station/training-station.component';
import { AdvancePortableComponent } from './advance-portable/advance-portable.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export default [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list'
  },
  {
    path: 'list',
    component: CatalogueComponent,
    data: { title: 'iModelslist' },
  },
  {
    path: 'individuals',
    component: IndividualsComponent,
    data: { title: 'iModelsindividuals' },
  },
  {
    path: 'professionals',
    component: ProfessionalsComponent,
    data: { title: 'iModelsprofessionals' },
  },
  {
    path: 'apex-pro',
    component: ApexProComponent,
    data: { title: 'iModelsapexPro' },
  },
  {
    path: 'apex-vr',
    component: ApexVrComponent,
    data: { title: 'iModelsapexVr' },
  },
  {
    path: 'analytic',
    component: AnalyticComponent,
    data: { title: 'iModelsanalytic' },
  },
  {
    path: 'advance-training-station',
    component: TrainingStationComponent,
    data: { title: 'iModelsadvanceTrainingStation' },
  },
  {
    path: 'advance-portable',
    component: AdvancePortableComponent,
    data: { title: 'iModelsadvancePortable' },
  },
  {
    path: ':id',
    component: ProductDetailComponent,
    data: { title: 'iModelsproduct' },
  },
] satisfies Route[];
