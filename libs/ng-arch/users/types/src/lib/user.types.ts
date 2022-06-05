import { Employee } from '@ng-arch/ng-arch/employees-management/types';

export interface User {
	_id?: string;
	email: string;
	name: string;
	password: string;
	employee?: Employee;
}
