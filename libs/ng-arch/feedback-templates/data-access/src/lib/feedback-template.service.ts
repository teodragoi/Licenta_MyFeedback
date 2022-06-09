import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FeedbackTemplate } from '@ng-arch/ng-arch/feedback-templates/types';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class FeedbackTemplateService {
	private baseUrl = 'http://127.0.0.1:3000/feedback-templates';

	constructor(private httpClient: HttpClient) {}

	public getFeedbackTemplate(
		feedbackTemplateId: string
	): Observable<FeedbackTemplate> {
		return this.httpClient.get<FeedbackTemplate>(
			`${this.baseUrl}/${feedbackTemplateId}`
		);
	}

	public editFeedbackTemplate(
		feedbackTemplateId: string,
		feedbackTemplate: Partial<FeedbackTemplate>
	): Observable<FeedbackTemplate> {
		return this.httpClient.patch<FeedbackTemplate>(
			`${this.baseUrl}/${feedbackTemplateId}`,
			feedbackTemplate
		);
	}
}
