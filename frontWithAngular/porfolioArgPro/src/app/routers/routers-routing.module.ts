import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { AboutmeComponent } from '../components/aboutme/aboutme.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path:'Aboutme',component:AboutmeComponent}

];
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
}

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class RoutersRoutingModule { }
