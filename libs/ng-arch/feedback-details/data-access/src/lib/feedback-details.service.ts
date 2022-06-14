import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Answer, Feedback } from '@ng-arch/ng-arch/feedback/types';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class FeedbackDetailsService {
	private baseUrl = 'http://127.0.0.1:3000/feedbacks';

	constructor(private httpClient: HttpClient) {}

	public getFeedbackDetails(feedbackId: string): Observable<Feedback> {
		return this.httpClient.get<Feedback>(`${this.baseUrl}/${feedbackId}`);
	}

	public sendFeedback(
		feedbackId: string,
		answers: Answer[]
	): Observable<Feedback> {
		return this.httpClient.put<Feedback>(
			`${this.baseUrl}/${feedbackId}`,
			answers
		);
	}
}
