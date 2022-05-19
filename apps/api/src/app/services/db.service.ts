import * as mongoose from 'mongoose';
import { environment } from '@api/environment';
import { from } from 'rxjs';

export class DB {
	private static isConnected = false;

	public static connect(): void {
		if (this.isConnected) {
			return;
		}

		this.isConnected = true;
    
		from(mongoose.connect(environment.DB_URI)).subscribe(
			() => {
				console.log('Connection successful');
			},
			(error) => {
				console.error(error);
			}
		);
	}
}
