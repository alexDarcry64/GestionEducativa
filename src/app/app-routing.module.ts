import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'chatbot',
    loadChildren: () => import('./chatbot/chatbot.module').then( m => m.ChatbotPageModule)
  },
  {
    path: 'alumnos',
    loadChildren: () => import('./alumnos/alumnos.module').then( m => m.AlumnosPageModule)
  },
  {
    path: 'agregar-alumno',
    loadChildren: () => import('./agregar-alumno/agregar-alumno.module').then( m => m.AgregarAlumnoPageModule)
  },
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then( m => m.CursosPageModule)
  },
  {
    path: 'agregar-cursos',
    loadChildren: () => import('./agregar-cursos/agregar-cursos.module').then( m => m.AgregarCursosPageModule)
  },
  {
    path: 'espanol',
    loadChildren: () => import('./espanol/espanol.module').then( m => m.EspanolPageModule)
  },
  {
    path: 'historia',
    loadChildren: () => import('./historia/historia.module').then( m => m.HistoriaPageModule)
  },
  {
    path: 'matematicas',
    loadChildren: () => import('./matematicas/matematicas.module').then( m => m.MatematicasPageModule)
  },
  {
    path: 'quimica',
    loadChildren: () => import('./quimica/quimica.module').then( m => m.QuimicaPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'seccion',
    loadChildren: () => import('./seccion/seccion.module').then( m => m.SeccionPageModule)
  },
  {
    path: 'agregar-seccion',
    loadChildren: () => import('./agregar-seccion/agregar-seccion.module').then( m => m.AgregarSeccionPageModule)
  },
  {
    path: 'agregar-categoria',
    loadChildren: () => import('./agregar-categoria/agregar-categoria.module').then( m => m.AgregarCategoriaPageModule)
  },
  {
    path: 'agregar-pregunta',
    loadChildren: () => import('./agregar-pregunta/agregar-pregunta.module').then( m => m.AgregarPreguntaPageModule)
  },
  {
    path: 'examen',
    loadChildren: () => import('./examen/examen.module').then( m => m.ExamenPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
