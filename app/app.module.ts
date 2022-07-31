import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BeNavbarComponent } from './backend/layouts/be-navbar/be-navbar.component';
import { BeProductFormComponent } from './backend/be-product-form/be-product-form.component';
import { BeAsideComponent } from './backend/layouts/be-aside/be-aside.component';
import { BeProductsComponent } from './backend/be-products/be-products.component';
import { FeHeaderComponent } from './frontend/layouts/fe-header/fe-header.component';
import { FeFooterComponent } from './frontend/layouts/fe-footer/fe-footer.component';
import { FeProductsComponent } from './frontend/fe-products/fe-products.component';
import { FeProductDetailsComponent } from './frontend/fe-product-details/fe-product-details.component';
import { BackendComponent } from './backend/backend.component';
import { FrontendComponent } from './frontend/frontend.component';
import { StatusBtnComponent } from './components/status-btn/status-btn.component';
import { InfoComponent } from './cv/info/info.component';
import { SkillComponent } from './cv/skill/skill.component';
import { ProjectComponent } from './cv/project/project.component';
import { SchoolComponent } from './cv/school/school.component';
import { CvComponent } from './cv/cv.component';
import { BeInfoComponent } from './backend/be-info/be-info.component';
import { BeSkillsComponent } from './backend/be-skills/be-skills.component';
import { BeProjectsComponent } from './backend/be-projects/be-projects.component';
import { BeSchoolsComponent } from './backend/be-schools/be-schools.component';
import { ShowErrorComponent } from './components/show-error/show-error.component';

@NgModule({
  declarations: [
    AppComponent,
    BeAsideComponent,
    BeProductsComponent,
    FeHeaderComponent,
    FeFooterComponent,
    FeProductsComponent,
    FeProductDetailsComponent,
    BackendComponent,
    FrontendComponent,
    BeNavbarComponent,
    BeProductFormComponent,
    StatusBtnComponent,
    InfoComponent,
    SkillComponent,
    ProjectComponent,
    SchoolComponent,
    CvComponent,
    BeInfoComponent,
    BeSkillsComponent,
    BeProjectsComponent,
    BeSchoolsComponent,
    ShowErrorComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
