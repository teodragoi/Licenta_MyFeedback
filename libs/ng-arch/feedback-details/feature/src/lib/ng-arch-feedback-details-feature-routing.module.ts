import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackDetailsComponent } from './feedback-details/feedback-details.component';

const routes: Routes = [
	{
		path: ':feedbackId',
		component: FeedbackDetailsComponent,
	},
];

@NgModule({
	exports: [RouterModule],
	imports: [RouterModule.forChild(routes)],
})
export class NgArchFeedbackDetailsFeatureRoutingModule {}
