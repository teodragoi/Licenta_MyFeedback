export enum TableActions {
	DELETE = 'delete',
	EDIT = 'edit',
}

export enum TableColumnType {
	ACTION,
	DATA,
}

export interface TableColumn {
	name: string;
	type: TableColumnType;
	actions?: TableActions[];
	propertyName?: string;
}

export interface TableConfig<T> {
	columns: TableColumn[];
	data: T[];
}
