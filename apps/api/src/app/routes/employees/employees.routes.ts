import { EmployeesController } from '@api/controllers/employees';
import { payloadValidation } from '@api/middlewares';
import { addEmployeeSchema } from '@api/schemas/employees';
import { Router } from 'express';

const router: Router = Router();

router.get('/', EmployeesController.getEmployees);
router.get('/:employeeId', EmployeesController.getEmployeeDetails);
router.post(
	'/',
	payloadValidation(addEmployeeSchema),
	EmployeesController.addEmployee
);

router.delete('/:employeeId', EmployeesController.deleteEmployee);

export default router;
