import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '@ng-arch/ng-arch/projects-management/types';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ProjectsService {
	private baseUrl: string = 'http://127.0.0.1:3000/projects';

	constructor(private httpClient: HttpClient) {}

	public addProject(project: Project): Observable<Project> {
		return this.httpClient.post<Project>(this.baseUrl, project);
	}

	public deleteProject(projectId: string): Observable<any> {
		return this.httpClient.delete(`${this.baseUrl}/${projectId}`);
	}

	public getAllProjects(): Observable<Project[]> {
		return this.httpClient.get<Project[]>(this.baseUrl);
	}
}
