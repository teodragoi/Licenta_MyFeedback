import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'ng-arch-manage-employees',
	templateUrl: './manage-employees.component.html',
	styleUrls: ['./manage-employees.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManageEmployeesComponent {}
