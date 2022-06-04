import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '@ng-arch/ng-arch/projects-management/types';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ProjectDetailsService {
	private baseUrl: string = 'http://127.0.0.1:3000/projects';

	constructor(private httpClient: HttpClient) {}

	public editProject(
		projectId: string,
		project: Partial<Project>
	): Observable<Project> {
		return this.httpClient.patch<Project>(
			`${this.baseUrl}/${projectId}`,
			project
		);
	}

	public getProjectDetails(projectId: string): Observable<Project> {
		return this.httpClient.get<Project>(`${this.baseUrl}/${projectId}`);
	}
}
