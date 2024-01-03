import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { HomeComponent } from './home/home.component';
import { HousinglocationComponent } from './housinglocation/housinglocation.component';
import { EditComponent } from './edit/edit.component';
import { ReactiveformexpComponent } from './reactiveformexp/reactiveformexp.component';
import { TempdrivneformComponent } from './tempdrivneform/tempdrivneform.component';
import { from } from 'rxjs';

const routes: Routes = [{ path: '', component: HomeComponent },
  
{ path: 'add', component: AdduserComponent },


{ path: 'view/:id', component: HousinglocationComponent },

{ path: 'edit/:id', component: EditComponent },

{ path: 'tempdrivne', component: TempdrivneformComponent },

{ path: 'reactive', component: ReactiveformexpComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
