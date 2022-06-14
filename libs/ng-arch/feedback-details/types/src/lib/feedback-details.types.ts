import { Feedback } from '@ng-arch/ng-arch/feedback/types';

export interface FeedbackDetailsVmData {
  isLoading: boolean;
  feedback: Feedback | null;
}