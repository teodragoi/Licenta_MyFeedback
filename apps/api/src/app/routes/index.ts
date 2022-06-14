import { Router } from 'express';
import employees from './employees/employees.routes';
import feedbackTemplates from './feedback-templates/feedback-templates.routes';
import feedbacks from './feedbacks/feedbacks.routes';
import login from './login/login.routes';
import projects from './projects/projects.routes';
import questions from './questions/questions.routes';
import roles from './roles/roles.routes';
import users from './users/users.routes';

const router: Router = Router();

router.use('/employees', employees);
router.use('/feedback-templates', feedbackTemplates);
router.use('/login', login);
router.use('/projects', projects);
router.use('/questions', questions);
router.use('/roles', roles);
router.use('/users', users);
router.use('/feedbacks', feedbacks);

export default router;
