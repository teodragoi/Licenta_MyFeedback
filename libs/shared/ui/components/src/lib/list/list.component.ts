import {
	ChangeDetectionStrategy,
	Component,
	Input,
} from '@angular/core';
import { ListData } from '@ng-arch/shared/types';

@Component({
	selector: 'shared-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
	@Input() listData: ListData[] | undefined;

	public uniqueIdentifier(index: number): number {
		return index;
	}
}
