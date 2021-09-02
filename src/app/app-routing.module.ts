import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'modal-producto',
    loadChildren: () => import('./pages/modal-producto/modal-producto.module').then( m => m.ModalProductoPageModule)
  },
  {
    path: 'form-categoria',
    loadChildren: () => import('./pages/form-categoria/form-categoria.module').then( m => m.FormCategoriaPageModule)
  },
  {
    path: 'form-marca',
    loadChildren: () => import('./pages/form-marca/form-marca.module').then( m => m.FormMarcaPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
