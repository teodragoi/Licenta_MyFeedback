import { Role, RoleType } from '@ng-arch/ng-arch/roles-management/types';

export const mockedRoles: Role[] = [
	{
		id: 1,
		name: 'Team Lead',
		type: RoleType.MANAGER,
	},
	{
		id: 2,
		name: 'Angular Developer',
		type: RoleType.EMPLOYEE,
	},
	{
		id: 3,
		name: 'Tester',
		type: RoleType.EMPLOYEE,
	},
	{
		id: 4,
		name: 'Scrum Master',
		type: RoleType.EMPLOYEE,
	},
];
