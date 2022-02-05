import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorFormComponent } from 'src/features/calculator-form/calculator.form.component';
import { CalculatorChartComponent } from 'src/features/chart/calculator.chart.component';

import { AppComponent } from './app.component';

const routes: Routes = [
	{
		path: 'calculator',
		component: CalculatorFormComponent,
	},
	{
		path: 'result',
		component: CalculatorChartComponent,
	},
	{
		path: '',
		redirectTo: '/calculator',
		pathMatch: 'full',
	},
];

@NgModule({
	declarations: [AppComponent, CalculatorFormComponent, CalculatorChartComponent],
	imports: [BrowserModule, RouterModule.forRoot(routes)],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
