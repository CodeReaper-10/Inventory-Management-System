import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './MyComponents/add-item/add-item.component';
import { DashboardComponent } from './MyComponents/dashboard/dashboard.component';
import { ModifyItemComponent } from './MyComponents/modify-item/modify-item.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'home', component: DashboardComponent },
  { path: 'addItems', component: AddItemComponent },
  { path: 'modifyItems', component: ModifyItemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
