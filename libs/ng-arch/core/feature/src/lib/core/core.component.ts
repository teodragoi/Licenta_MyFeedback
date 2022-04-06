import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	templateUrl: './core.component.html',
	styleUrls: ['./core.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoreComponent {
	constructor() {}
}
