import routes from '@api/routes';
import { DB } from '@api/services';
import { json } from 'body-parser';
import { Express } from 'express';
import * as express from 'express';
import * as cors from 'cors';

const app: Express = express();

app.use(cors());
app.use(
	json({
		limit: '50mb',
	})
);
app.use(routes);

DB.connect();

export default app;
