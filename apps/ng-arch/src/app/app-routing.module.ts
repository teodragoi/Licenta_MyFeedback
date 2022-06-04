import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: () =>
			import('@ng-arch/ng-arch/core/feature').then(
				(m) => m.NgArchCoreFeatureModule
			),
	},
	// {
	// 	path: '**',
	// 	redirectTo: '',
	// },
];

@NgModule({
	exports: [RouterModule],
	imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
