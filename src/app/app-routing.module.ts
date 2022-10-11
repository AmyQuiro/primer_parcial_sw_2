import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UploadComponent } from './components/upload/upload.component';
import { ResearchComponent } from './components/research/research.component';

const routes: Routes =[
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'upload',
    component:UploadComponent
  },
  {
    path:'research',
    component:ResearchComponent
  },
  {
    path: '',
    pathMatch: 'full',
    component:LoginComponent
  } 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
