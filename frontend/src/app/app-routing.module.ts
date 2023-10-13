import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowShoppingDetailsComponent } from './show-shopping-details/show-shopping-details.component';
import { ManipulateDetailsComponent } from './manipulate-details/manipulate-details.component';

const routes:Routes=[
  {path:'',component:ShowShoppingDetailsComponent},
  {path:'details',component:ManipulateDetailsComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { 

}
