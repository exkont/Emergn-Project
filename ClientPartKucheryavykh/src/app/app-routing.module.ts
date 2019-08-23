import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { FormRegistrationComponent } from './form-registration/form-registration.component';
import { FormEnterComponent } from './form-enter/form-enter.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FormChangeComponent } from './form-change/form-change.component';

const appRoutes: Routes = [
    { path: '', component: FormEnterComponent},
    { path: 'registration', component: FormRegistrationComponent },
    { path: 'userlist/:id', component: UserListComponent},
    { path: 'change/:id', component: FormChangeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule
{

}