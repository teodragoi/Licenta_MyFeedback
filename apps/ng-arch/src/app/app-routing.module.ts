import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '@shared/services';

const routes: Routes = [
	{
		path: '',
		loadChildren: () =>
			import('@ng-arch/ng-arch/core/feature').then(
				(m) => m.NgArchCoreFeatureModule
			),
			canActivate: [AuthGuardService]
	},
	{
		path: 'login',
		loadChildren: () =>
			import('@ng-arch/ng-arch/login/feature').then(
				(m) => m.NgArchLoginFeatureModule
			),
	},
	{
		path: '**',
		redirectTo: '',
	},
];

@NgModule({
	exports: [RouterModule],
	imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
