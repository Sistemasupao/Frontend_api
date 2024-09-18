import { Routes } from '@angular/router';
import { RegistroComponent } from './features/registro/registro.component';
import { LoginComponent } from './features/login/login.component';
import { RecuperarPasswordComponent } from './features/recuperar-password/recuperar-password.component';
import { UserProfileComponent } from './features/user-profile/user-profile.component';
import { NotificacionesComponent } from './features/notificaciones/notificaciones.component';
import { SistemaComponent } from './features/sistema/sistema.component';

export const routes: Routes = [
    { path: 'registro', component: RegistroComponent },
    { path: 'login', component: LoginComponent },
    { path: 'recuperar', component: RecuperarPasswordComponent },
    { path: 'userprofile', component: UserProfileComponent }, 
    {path: 'notificaciones', component: NotificacionesComponent},
    {path: 'sistema', component: SistemaComponent},
];