import { UserDTO } from '@api/db';
import { User } from '@ng-arch/ng-arch/users/types';
import { Request, Response } from 'express';
import HttpStatus from 'http-status-codes';

export class LoginController {
	public static async login(req: Request, res: Response): Promise<Response> {
		try {
			const payload: { email: string; password: string } = { ...req.body };

			const user: User = await UserDTO.findOne({
				email: payload.email,
			}).populate('employee', '-__v -roles');

			if (!user) {
				return res
					.status(HttpStatus.BAD_REQUEST)
					.json({ user: 'User does not exist.' });
			}

			if (user.password !== payload.password) {
				return res
					.status(HttpStatus.BAD_REQUEST)
					.json({ password: 'Password is incorrect.' });
			}

			return res.status(HttpStatus.OK).json(user);
		} catch (error) {
			return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error);
		}
	}
}
