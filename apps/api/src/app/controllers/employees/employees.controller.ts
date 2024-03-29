import { EmployeeDTO, UserDTO } from '@api/db';
import { Employee } from '@ng-arch/ng-arch/employees-management/types';
import { User } from '@ng-arch/ng-arch/users/types';
import { Request, Response } from 'express';
import HttpStatus from 'http-status-codes';

export class EmployeesController {
	public static async getEmployees(
		req: Request,
		res: Response
	): Promise<Response> {
		try {
			const { q } = req.query;

			const employees: Employee[] = await EmployeeDTO.find({
				name: {
					$regex: q || '',
					$options: 'i',
				},
			});

			return res.status(HttpStatus.OK).json(employees);
		} catch (error) {
			return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
				error,
			});
		}
	}

	public static async getEmployeesWithRoles(req: Request, res: Response) {
		try {
			const { roles } = req.body;

			const allEmployees: Employee[] = await EmployeeDTO.find({});

			const employees = allEmployees.filter((employee) =>
				employee.roles.some((id) => {
					return roles.includes(id.toString());
				})
			);

			return res.status(HttpStatus.OK).json(employees);
		} catch (error) {
			return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error });
		}
	}

	public static async getEmployeeDetails(
		req: Request,
		res: Response
	): Promise<Response> {
		try {
			const { employeeId } = req.params;

			const employee: Employee = await EmployeeDTO.findOne({
				_id: employeeId,
			}).populate('roles', '-__v');

			return res.status(HttpStatus.OK).json(employee);
		} catch (error) {
			return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
				error,
			});
		}
	}

	public static async addEmployee(
		req: Request,
		res: Response
	): Promise<Response> {
		try {
			const employee: Employee = await EmployeeDTO.create({
				...req.body,
			});

			return res.status(HttpStatus.CREATED).json(employee);
		} catch (error) {
			return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error);
		}
	}

	public static async deleteEmployee(
		req: Request,
		res: Response
	): Promise<Response> {
		try {
			const { employeeId } = req.params;

			const user: User = await UserDTO.findOne({ employee: employeeId });

			if (user) {
				await UserDTO.deleteOne({ _id: user._id });
			}

			await EmployeeDTO.deleteOne({
				_id: employeeId,
			});
			return res.status(HttpStatus.NO_CONTENT).json({ success: true });
		} catch (error) {
			return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error);
		}
	}

	public static async editEmployeeDetails(
		req: Request,
		res: Response
	): Promise<Response> {
		try {
			const { employeeId } = req.params;

			const employee: Employee | undefined = await EmployeeDTO.findOne({
				_id: employeeId,
			});

			if (!employee) {
				return res
					.status(HttpStatus.NOT_FOUND)
					.json({ error: 'Employee not found' });
			}

			await EmployeeDTO.updateOne({ _id: employeeId }, { ...req.body });

			const updatedEmployee: Employee = await EmployeeDTO.findOne({
				_id: employeeId,
			}).populate('roles', '-__v');

			return res.status(HttpStatus.OK).json(updatedEmployee);
		} catch (error) {
			return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error);
		}
	}
}
