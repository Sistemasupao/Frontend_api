import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private router: Router) {}

  // Función que se ejecuta al hacer clic en el botón de iniciar sesión
  login() {
    // Aquí podrías agregar lógica de autenticación

    // Redirigir al perfil de usuario
    this.router.navigate(['/sistema']);
  }
}