import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'ng-arch-manage-projects',
	templateUrl: './manage-projects.component.html',
	styleUrls: ['./manage-projects.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManageProjectsComponent {}
