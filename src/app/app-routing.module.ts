import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyglamComponent } from './myglam/myglam.component';
import { CalculatriceComponent } from './calculatrice/calculatrice.component';
import { CrudtodoComponent } from './crudtodo/crudtodo.component';
import { AddComponent } from './crudtodo/add/add.component';
import { UpdateComponent } from './crudtodo/update/update.component';
import { GetComponent } from './crudtodo/get/get.component';

const routes: Routes = [
  {
    path:"my-glam", 
    component: MyglamComponent
  },
  {
    path:"calculatrice", 
    component: CalculatriceComponent
  },
  {
    path:"crudtodo", 
    component: CrudtodoComponent,children:[{
      path:'create',
      component: AddComponent
    },
    {
      path:'edit',
      component: UpdateComponent
    },
    {
      path:'get',
      component: GetComponent  
    }]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
