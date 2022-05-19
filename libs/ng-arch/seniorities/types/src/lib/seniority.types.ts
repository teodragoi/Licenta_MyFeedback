export interface Seniority {
	name: string;
	id?: number;
	nextSeniority?: Seniority;
	prevSeniority?: Seniority;
}
