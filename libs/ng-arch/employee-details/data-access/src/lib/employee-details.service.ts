import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '@ng-arch/ng-arch/employees-management/types';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class EmployeeDetailsService {
	private baseUrl = 'http://127.0.0.1:3000/employees';

	constructor(private httpClient: HttpClient) {}

	public getEmployeeDetails(employeeId: string): Observable<Employee> {
		return this.httpClient.get<Employee>(`${this.baseUrl}/${employeeId}`);
	}

	public editEmployeeDetails(
		employeeId: string,
		employee: Partial<Employee>
	): Observable<Employee> {
		return this.httpClient.patch<Employee>(
			`${this.baseUrl}/${employeeId}`,
			employee
		);
	}
}
