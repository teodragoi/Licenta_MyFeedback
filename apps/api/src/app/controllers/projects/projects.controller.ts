import { EmployeeDTO, ProjectDTO } from '@api/db';
import { Employee } from '@ng-arch/ng-arch/employees-management/types';
import { Project } from '@ng-arch/ng-arch/projects-management/types';
import { Request, Response } from 'express';
import e = require('express');
import HttpStatus from 'http-status-codes';

export class ProjectsController {
	public static async getProjects(
		req: Request,
		res: Response
	): Promise<Response> {
		try {
			const { q } = req.query;

			const projects: Project[] = await ProjectDTO.find({
				name: {
					$regex: q || '',
					$options: 'i',
				},
			});

			return res.status(HttpStatus.OK).json(projects);
		} catch (error) {
			return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
				error,
			});
		}
	}

	public static async getProjectDetails(
		req: Request,
		res: Response
	): Promise<Response> {
		try {
			const { projectId } = req.params;

			const project: Project = await ProjectDTO.findOne({
				_id: projectId,
			})
				.populate('employees', '-__v -roles')
				.populate('availableRoles', '-__v');

			return res.status(HttpStatus.OK).json(project);
		} catch (error) {
			return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
				error,
			});
		}
	}

	public static async addProject(
		req: Request,
		res: Response
	): Promise<Response> {
		try {
			const project: Project = await ProjectDTO.create({
				...req.body,
			});

			return res.status(HttpStatus.CREATED).json(project);
		} catch (error) {
			return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error);
		}
	}

	public static async editProject(
		req: Request,
		res: Response
	): Promise<Response> {
		try {
			const { projectId } = req.params;

			const project: Project | undefined = await ProjectDTO.findOne({
				_id: projectId,
			});

			if (!project) {
				return res
					.status(HttpStatus.NOT_FOUND)
					.json({ error: 'Project not found' });
			}

			await ProjectDTO.updateOne({ _id: projectId }, { ...req.body });

			const updatedProject: Project = await ProjectDTO.findOne({
				_id: projectId,
			})
				.populate('employees', '-__v -roles')
				.populate('availableRoles', '-__v');

			return res.status(HttpStatus.OK).json(updatedProject);
		} catch (error) {
			return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error);
		}
	}

	public static async deleteProject(
		req: Request,
		res: Response
	): Promise<Response> {
		try {
			const { projectId } = req.params;

			await ProjectDTO.deleteOne({
				_id: projectId,
			});
			return res.status(HttpStatus.NO_CONTENT).json({ success: true });
		} catch (error) {
			return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error);
		}
	}

	public static async getProjectsByEmployee(
		req: Request,
		res: Response
	): Promise<Response> {
		try {
			const { employeeId } = req.params;

			const projects: Project[] = await ProjectDTO.find({});

			const projectsForEmployee = projects.filter((project: Project) =>
				project.employees.some(
					(employee: Employee) => employee._id.toString() === employeeId
				)
			);

			return res.status(HttpStatus.OK).json(projectsForEmployee);
		} catch (error) {
			return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error);
		}
	}
}
