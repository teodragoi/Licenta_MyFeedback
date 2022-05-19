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

			return res.status(HttpStatus.OK).json(roles);
		} catch (error) {
			return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
				error,
			});
		}
	}

	public static async addRole(req: Request, res: Response): Promise<Response> {
		try {
			const role: Role = await RoleDTO.create({
				...req.body,
			});

			return res.status(HttpStatus.CREATED).json(role);
		} catch (error) {
			return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error);
		}
	}

	public static async deleteRole(
		req: Request,
		res: Response
	): Promise<Response> {
		try {
			const { roleId } = req.params;

			await RoleDTO.deleteOne({
				_id: roleId,
			});
			return res.status(HttpStatus.NO_CONTENT).json({ success: true });
		} catch (error) {
			return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error);
		}
	}
}
