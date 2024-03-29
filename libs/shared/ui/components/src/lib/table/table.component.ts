import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	Input,
	Output,
} from '@angular/core';
import {
	TableActions,
	TableColumn,
	TableColumnType,
	TableConfig,
} from '@ng-arch/shared/types';

@Component({
	selector: 'ng-arch-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
	@Input() public config: TableConfig<any>;
	@Output() public actionSelected: EventEmitter<{
		action: TableActions;
		element: any;
	}> = new EventEmitter();
	@Output() public rowClicked: EventEmitter<any> = new EventEmitter();

	public readonly TableColumnType = TableColumnType;

	public get displayedColumns(): string[] {
		return this.config.columns.map((column: TableColumn) => column.name);
	}

	public actionName(action: TableActions): string {
		return 'common.' + action;
	}

	public onActionClick(action: TableActions, element: any, event: Event): void {
		event.stopImmediatePropagation();
		this.actionSelected.emit({ action, element });
	}

	public onRowClick(row: any): void {
		this.rowClicked.emit(row);
	}

	public uniqueIdentifier(index: number): number {
		return index;
	}
}
