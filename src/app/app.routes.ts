import { Routes } from '@angular/router';
import { RegistroComponent } from './features/registro/registro.component';
import { LoginComponent } from './features/login/login.component';
import { RecuperarPasswordComponent } from './features/recuperar-password/recuperar-password.component';

export const routes: Routes = [
    {path: 'registro', component: RegistroComponent},
    {path: 'login', component: LoginComponent},
    {path: 'recuperar', component: RecuperarPasswordComponent},
];
