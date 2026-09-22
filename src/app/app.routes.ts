import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SobreComponent } from './pages/sobre/sobre.component';

export const routes: Routes = [
    {path:'login', component:LoginComponent},
    {path:'sobre', component:SobreComponent}
];
