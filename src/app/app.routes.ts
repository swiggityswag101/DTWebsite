import { Routes } from '@angular/router';
import { ProbabilityCalculatorComponent } from './probability-calculator/probability-calculator.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: 'probability-calculator', component: ProbabilityCalculatorComponent},
    {path: 'home', component: HomeComponent},
];
