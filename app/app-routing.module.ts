import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeProductsComponent } from './backend/be-products/be-products.component';
import { BeProductFormComponent } from './backend/be-product-form/be-product-form.component';
import { FeProductsComponent } from './frontend/fe-products/fe-products.component';
import { FeProductDetailsComponent } from './frontend/fe-product-details/fe-product-details.component';
import { BackendComponent } from './backend/backend.component';
import { FrontendComponent } from './frontend/frontend.component';
import { CvComponent } from './cv/cv.component';
import { BeInfoComponent } from './backend/be-info/be-info.component';
import { BeSkillsComponent } from './backend/be-skills/be-skills.component';
import { BeProjectsComponent } from './backend/be-projects/be-projects.component';
import { BeSchoolsComponent } from './backend/be-schools/be-schools.component';


const routes: Routes = [
  {
    path: '',
    component: FrontendComponent,
    children: [
      {
        path: '',
        component: CvComponent
      },
      {
        path: 'phones',
        component: FeProductsComponent
      },
      {
        path: 'phone/:id',
        component: FeProductDetailsComponent
      }
    ]
  },
  {
    path: 'admin',
    component: BackendComponent,
    children: [
      {
        path: '',
        component: CvComponent
      },
      {
        path: 'phones',
        component: BeProductsComponent
      },
      {
        path: 'phone/add',
        component: BeProductFormComponent
      },
      {
        path: 'phone/edit/:id',
        component: BeProductFormComponent
      },
      {
        path: 'phone/:id',
        component: FeProductDetailsComponent
      },
      {
        path: 'info',
        component: BeInfoComponent
      },
      {
        path: 'skills',
        component: BeSkillsComponent
      },
      {
        path: 'projects',
        component: BeProjectsComponent
      },
      {
        path: 'schools',
        component: BeSchoolsComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
