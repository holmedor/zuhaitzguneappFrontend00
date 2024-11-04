import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArbolesComponent } from './arboles/arboles.component';

const routes: Routes = [
  { path: 'arboles/:nombre', component: ArbolesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
