import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
const routes: Routes = [
  {
    path: "",
    redirectTo: "/user/dashboard",
    pathMatch: "full",
    data: { breadcrumb: 'Repo List'}
  },
  { 
    path: 'user', 
    loadChildren: () => 
    import('./user/user.module').then(m => m.UserModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
