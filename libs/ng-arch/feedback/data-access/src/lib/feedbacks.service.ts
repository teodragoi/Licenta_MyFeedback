import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Answer, Feedback } from '@ng-arch/ng-arch/feedback/types';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class FeedbacksService {
	private baseUrl = 'http://127.0.0.1:3000/feedbacks';

	constructor(private httpClient: HttpClient) {}

	public getFeedbackRequests(employeeId: string): Observable<Feedback[]> {
		return this.httpClient.get<Feedback[]>(
			`${this.baseUrl}/requests/${employeeId}`
		);
	}

	public getMyFeedbacks(employeeId: string): Observable<Feedback[]> {
		return this.httpClient.get<Feedback[]>(
			`${this.baseUrl}/my-feedback/${employeeId}`
		);
	}


	public requestFeedback(
		employeeId: string,
		templateId: string,
		fromEmployeeIds: string[]
	): Observable<Feedback[]> {
		return this.httpClient.post<Feedback[]>(`${this.baseUrl}/${employeeId}`, {
			templateId,
			fromEmployeeIds,
		});
	}

	public dismissFeedback(feedbackId: string): Observable<{ success: boolean }> {
		return this.httpClient.delete<{ success: boolean }>(
			`${this.baseUrl}/${feedbackId}`
		);
	}
}
