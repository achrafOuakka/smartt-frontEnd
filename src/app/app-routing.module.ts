import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/base/layout/layout.component';


const routes: Routes = [
  // { path: "login", component: LoginComponent },


  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path: '', component: LayoutComponent, children: [
      { path: '', component: LayoutComponent },
      { path: 'home', component: LayoutComponent },


    ]
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
