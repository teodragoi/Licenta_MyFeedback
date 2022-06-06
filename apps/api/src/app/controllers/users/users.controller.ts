import { EmployeeDTO, UserDTO } from '@api/db';
import { User } from '@ng-arch/ng-arch/users/types';
import { Request, Response } from 'express';
import HttpStatus from 'http-status-codes';

export class UsersController {
	public static async getUsers(req: Request, res: Response): Promise<Response> {
		try {
			const { q } = req.query;

			const users: User[] = await UserDTO.find({
				name: {
					$regex: q || '',
					$options: 'i',
				},
			});

			return res.status(HttpStatus.OK).json(users);
		} catch (error) {
			return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error);
		}
	}

	public static async getUserDetails(
		req: Request,
		res: Response
	): Promise<Response> {
		try {
			const { userId } = req.params;

			const user: User = await UserDTO.findOne({ _id: userId }).populate(
				'employee',
				'-__v'
			);
			return res.status(HttpStatus.OK).json(user);
		} catch (error) {
			return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error);
		}
	}

	public static async addUser(req: Request, res: Response): Promise<Response> {
		try {
			const payload: User = req.body;

			const existingUser: User = await UserDTO.findOne({
				email: payload.email,
			});

			if (existingUser) {
				return res
					.status(HttpStatus.BAD_REQUEST)
					.json({ error: 'User with this email already exists.' });
			}

			const employee = await EmployeeDTO.create({
				name: payload.name,
				email: payload.email,
			});

			const user: User = await UserDTO.create({
				...req.body,
				employee,
			});

			return res.status(HttpStatus.CREATED).json(user);
		} catch (error) {
			return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error);
		}
	}

	public static async editUserDetails(
		req: Request,
		res: Response
	): Promise<Response> {
		try {
			const { userId } = req.params;

			const user: User | undefined = await UserDTO.findOne({
				_id: userId,
			});

			if (!user) {
				return res
					.status(HttpStatus.NOT_FOUND)
					.json({ error: 'User not found' });
			}

			await EmployeeDTO.updateOne({ _id: user.employee }, { ...req.body });

			await UserDTO.updateOne({ _id: userId }, { ...req.body });

			return res
				.status(HttpStatus.OK)
				.json({ user: Object.assign(user, { ...req.body }) });
		} catch (error) {
			return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error);
		}
	}

	public static async editUserPassword(
		req: Request,
		res: Response
	): Promise<Response> {
		try {
			const { userId } = req.params;

			const user: User | undefined = await UserDTO.findOne({
				_id: userId,
			});

			if (!user) {
				return res
					.status(HttpStatus.NOT_FOUND)
					.json({ error: 'User not found' });
			}

			await UserDTO.updateOne({ _id: userId }, { ...req.body });

			return res
				.status(HttpStatus.OK)
				.json({ user: Object.assign(user, { ...req.body }) });
		} catch (error) {
			return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error);
		}
	}

	public static async deleteUser(
		req: Request,
		res: Response
	): Promise<Response> {
		try {
			const { userId } = req.params;

			const user: User = await UserDTO.findOne({ _id: userId });

			if (!user) {
				return res
					.status(HttpStatus.NOT_FOUND)
					.json({ error: 'User not found!' });
			}
			await EmployeeDTO.deleteOne({
				_id: user.employee._id,
			});

			await UserDTO.deleteOne({ _id: user._id });

			return res.status(HttpStatus.NO_CONTENT).json({ success: true });
		} catch (error) {
			return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error);
		}
	}
}
