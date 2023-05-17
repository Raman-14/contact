import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNewContactComponent} from './pages/create-new-contact/create-new-contact.component'
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'app',
    pathMatch:'full',
    title:'home'
  },
  {
    path: 'create-new-contact',
    component: CreateNewContactComponent,
    title: 'create new contact'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
