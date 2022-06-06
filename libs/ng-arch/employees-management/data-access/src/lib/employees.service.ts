import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '@ng-arch/ng-arch/employees-management/types';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class EmployeesService {
	private baseUrl = 'http://127.0.0.1:3000/employees';

	constructor(private httpClient: HttpClient) {}

	public getAllEmployees(): Observable<Employee[]> {
		return this.httpClient.get<Employee[]>(this.baseUrl);
	}

	public getEmployeesByRole(roles: string[]): Observable<Employee[]> {
		return this.httpClient.post<Employee[]>(`${this.baseUrl}/byRoles`, {
			roles,
		});
	}

	public deleteEmployee(employeeId: string): Observable<{ success: boolean }> {
		return this.httpClient.delete<{ success: boolean }>(
			`${this.baseUrl}/${employeeId}`
		);
	}
}
