import { RoleDTO } from '@api/db';
import { Role } from '@ng-arch/ng-arch/roles-management/types';
import { Request, Response } from 'express';
import HttpStatus from 'http-status-codes';

export class RolesController {
	public static async getRoles(req: Request, res: Response): Promise<Response> {
		try {
			const { q } = req.query;

			const roles: Role[] = await RoleDTO.find({
				name: {
					$regex: q || '',
					$options: 'i',
				},
			});

			return res.status(HttpStatus.OK).json({ success: true, roles });
		} catch (error) {
			console.error(error);
			return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
				success: false,
				message: 'An error occurred while trying to get roles',
			});
		}
	}

	public static async addRole(req: Request, res: Response): Promise<Response> {
    console.log(req.body)
		try {
			const role: Role = await RoleDTO.create({
				...req.body,
			});

			return res.status(HttpStatus.OK).json({ success: true, role });
		} catch (error) {
			console.error(error);
			return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
				success: false,
				message: 'An error occurred while trying to add a role',
			});
		}
	}
}
