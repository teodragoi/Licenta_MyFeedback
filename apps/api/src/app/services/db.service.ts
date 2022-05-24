import { environment } from '@api/environment';
import * as mongoose from 'mongoose';
import { from } from 'rxjs';
import { take } from 'rxjs/operators';

export class DB {
	private static isConnected = false;

	public static connect(): void {
		if (this.isConnected) {
			return;
		}

		this.isConnected = true;

		from(mongoose.connect(environment.DB_URI))
			.pipe(take(1))
			.subscribe(
				() => {
					console.log('Connection successful');
				},
				(error) => {
					console.error(error);
				}
			);
	}
}
