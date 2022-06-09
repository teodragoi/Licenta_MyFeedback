import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FeedbackTemplate } from '@ng-arch/ng-arch/feedback-templates/types';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class FeedbackTemplatesService {
	private baseUrl = 'http://127.0.0.1:3000/feedback-templates';

	constructor(private httpClient: HttpClient) {}

	public addFeedbackTemplate(
		feedbackTemplate: FeedbackTemplate
	): Observable<FeedbackTemplate> {
		return this.httpClient.post<FeedbackTemplate>(
			this.baseUrl,
			feedbackTemplate
		);
	}

	public deleteFeedbackTemplate(
		feedbackTemplateId: string
	): Observable<{ success: boolean }> {
		return this.httpClient.delete<{ success: true }>(
			`${this.baseUrl}/${feedbackTemplateId}`
		);
	}
}
