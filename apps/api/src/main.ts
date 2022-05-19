import { environment } from '@api/environment';
import { Server } from 'http';
import app from './app';

const port: string | number = environment.PORT || 3000;
const server: Server = app.listen(port, () => {
	console.log(`Listening at http://127.0.0.1:${port}`);
});

server.on('error', console.error);
