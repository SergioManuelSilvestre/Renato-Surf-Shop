import { WetsuitsComponent } from './components/wetsuits/wetsuits.component';
import { SurfBoardsComponent } from './components/surf-boards/surf-boards.component';
import { HomeComponent } from './components/home/home.component';
import { SigningComponent } from './components/registro/signing/signing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [

    {
        path: '',
        component: HomeComponent

    },
    {
        path: 'pranchasSurf',
        component: SurfBoardsComponent

    },
    {
        path: 'wetsuits',
        component: WetsuitsComponent

    },
    {
        path: 'novo-utilizador',
        component: SigningComponent
    },
    {
        // rotas desconhecidas são enviadas para
        // colocar no fim sempre para nao haver conflitos
       path: '**',
       component: HomeComponent
   },

  ];


  @NgModule({
    declarations: [
    ],
    imports: [RouterModule.forRoot(
        appRoutes)],
    providers: [],
    bootstrap: [],
    exports: [RouterModule]
  })

  export class AppRotas {}
