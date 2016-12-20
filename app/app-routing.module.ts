import { RouterModule, Routes } from '@angular/router';
import {NgModule} from '@angular/core';

import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailsComponent }  from './hero-detail.component';

const  routes:Routes=[
    { path: '',redirectTo: "/dashboard", pathMatch: 'full'},
            {path: 'heroes', component: HeroesComponent },
            {path: 'dashboard',component: DashboardComponent},
            
            {path: 'details/:id',component: HeroDetailsComponent},
        ];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
}
)
export class AppRoutingModule{}