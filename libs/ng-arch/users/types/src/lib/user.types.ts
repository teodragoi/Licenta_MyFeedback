import { Employee } from '@ng-arch/ng-arch/employees-management/types';
import { ListData } from '@ng-arch/shared/types';

export interface User {
	_id?: string;
	email: string;
	name: string;
	password: string;
	employee?: Employee;
}

export interface UserDetailsVmData {
	isLoading: boolean;
	user: User | null;
}