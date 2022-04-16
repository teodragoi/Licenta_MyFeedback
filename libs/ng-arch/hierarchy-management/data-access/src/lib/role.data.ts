import { Role, RoleType } from '@ng-arch/ng-arch/hierarchy-management/types';

export const mockedRoles: Role[] = [
	{
		name: 'Team Lead',
		type: RoleType.MANAGER,
	},
	{
		name: 'Angular Developer',
		type: RoleType.EMPLOYEE,
	},
	{
		name: 'Tester',
		type: RoleType.EMPLOYEE,
	},
	{
		name: 'Scrum Master',
		type: RoleType.EMPLOYEE,
	},
];
