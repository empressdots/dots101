import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObituaryComponent } from './obituary.component';
import { Routes, RouterModule } from '@angular/router';

const obituaryRoutes: Routes = [
  { path: '', component: ObituaryComponent }
]

@NgModule({
  declarations: [ObituaryComponent],
  imports: [
    CommonModule, 
    RouterModule.forChild(obituaryRoutes)
  ],
  exports: [
    ObituaryComponent
  ]
})
export class ObituaryModule { }
