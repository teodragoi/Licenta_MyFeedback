import { EmployeesController } from '@api/controllers';
import { payloadValidation } from '@api/middlewares';
import { addEmployeeSchema, editEmployeeSchema } from '@api/schemas';
import { Router } from 'express';

const router: Router = Router();

router.get('/', EmployeesController.getEmployees);
router.get('/:employeeId', EmployeesController.getEmployeeDetails);

router.post('/byRoles', EmployeesController.getEmployeesWithRoles);
router.post(
	'/',
	payloadValidation(addEmployeeSchema),
	EmployeesController.addEmployee
);

router.patch(
	'/:employeeId',
	payloadValidation(editEmployeeSchema),
	EmployeesController.editEmployeeDetails
);

router.delete('/:employeeId', EmployeesController.deleteEmployee);

export default router;
