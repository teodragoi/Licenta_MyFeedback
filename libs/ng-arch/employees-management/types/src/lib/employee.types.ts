import { Role } from '@ng-arch/ng-arch/roles-management/types';

export interface Employee {
	_id?: number;
	email: string;
	name: string;
	roles: Role[];
}
