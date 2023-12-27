import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { ViewComponent } from './view/view.component';
import { HomeComponent } from './home/home.component';
import { EdituserComponent } from './edituser/edituser.component';


const routes: Routes = [{ path: '', component:HomeComponent  },
  
{ path: 'add', component: AdduserComponent },


{ path: 'view/:id', component: ViewComponent },

{ path: 'edit', component: EdituserComponent    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
