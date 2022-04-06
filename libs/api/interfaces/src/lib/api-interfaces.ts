export interface IStatusResponse {
	success: boolean;
	message?: string;
}

export interface IAuthResponse extends IStatusResponse {
	userToken: string;
}

export interface AuthRequestBody {
	accessToken: string;
	inviteToken?: string;
}

export interface IUserData {
	_id: string;
	name: string;
	email: string;
	patients: IUserData[] | string[];
	googleId: string;
	picture: string;
	role: string;
	lastUpdates: Date;
	refreshToken: string;
	createdAt: Date;
	updatedAt: Date;
}

export interface IStatus {
	_id: string;
	description?: string;
	options: IStatusOption[];
	createdAt: Date;
	updatedAt: Date;
}

export interface IFile {
	_id: string;
	userId?: string;
	diagnosisId?: string;
	name: string;
	size: number;
	mime: string;
	type: string;
	data: string;
	lastModified: number;
	createdAt: Date;
	updatedAt: Date;
}

export interface IFileRequestBody {
	name: string;
	size: number;
	mime: string;
	type: string;
	data: string;
	lastModified: number;
}

export interface IStatusOption {
	option: string;
	checked: boolean;
}

export interface ISymptom {
	_id: string;
	user: string | IUserData;
	title: string;
	description: string;
	options: IStatusOption[];
	createdAt: Date;
	updatedAt: Date;
}

export interface IDiagnosis {
	_id: string;
	doctorId: string | IUserData;
	patientId: string | IUserData;
	title: string;
	description: string;
	files: IFile[];
	createdAt: Date;
	updatedAt: Date;
}

export interface IUserNotification {
	_id: string;
	from?: IUserData;
	to: IUserData;
	title: string;
	description: string;
	isSystem: boolean;
	tags: IUserNotificationTag[];
	createdAt: Date;
	updatedAt: Date;
}

export interface IUserNotificationTag {
	type: string;
	text: string;
}

export interface IData {
	_id: string;
	type: string;
	date: Date | string;
	result: number;
	createdAt: Date;
	updatedAt: Date;
}

export interface IDailyStatus {
	label: string;
	value: string;
}

export interface IDailyStatusOption {
	option: string;
	checked: boolean;
}

export interface IUserDataResponse extends IStatusResponse {
	user: IUserData;
}

export interface IPatientsResponse extends IStatusResponse {
	patients: IUserData[];
	summary?: any;
}

export interface IUserNotificationsResponse extends IStatusResponse {
	notifications: IUserNotification[];
}

export interface IDataResponse extends IStatusResponse {
	results: IData[];
}

export interface ISearchResponse extends IStatusResponse {
	users: IUserData[];
}

export interface InvitationRequestBody {
	email: string;
	role: string;
}

export interface DailyStatusRequestBody {
	description?: string;
	options: IDailyStatusOption[];
}

export interface FilesRequestBody {
	files: IFileRequestBody[];
}

export interface SymptomRequestBody {
	title: string;
	description: string;
	options: IDailyStatusOption[];
}

export interface DiagnosisRequestBody {
	title: string;
	description: string;
	files: IFileRequestBody[];
}

export interface IStatusesResponse extends IStatusResponse {
	status: IStatus;
}

export interface IAllStatusesResponse extends IStatusResponse {
	statuses: IStatus[];
}

export interface ISymptomResponse extends IStatusResponse {
	symptom: ISymptom;
}

export interface ISymptomsResponse extends IStatusResponse {
	symptoms: ISymptom[];
}

export interface IFilesResponse extends IStatusResponse {
	files: IFile[];
}

export interface IDiagnosisResponse {
	diagnosis: IDiagnosis;
}

export interface IDiagnosesResponse {
	diagnoses: IDiagnosis[];
}
