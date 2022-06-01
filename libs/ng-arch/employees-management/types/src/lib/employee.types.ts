import { Role } from '@ng-arch/ng-arch/roles-management/types';

export interface Employee {
	_id?: string;
	email: string;
	name: string;
	roles: Role[];
}
