import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { ListallComponent } from './components/listall/listall.component';
import { ListoneComponent } from './components/listone/listone.component';

const routes: Routes = [
  // localhost: 4200/listall
  { path: "listall", component: ListallComponent},

  // localhost: 4200/listall/1
  { path: "listall/:taskId", component: ListoneComponent},

  // localhost: 4200/create
  { path: "create", component: CreateComponent},

  // localhost: 4200/edit/1
  { path: "edit/:taskId", component: EditComponent},

  // localhost: 4200/
  { path: "", redirectTo:"listall", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
