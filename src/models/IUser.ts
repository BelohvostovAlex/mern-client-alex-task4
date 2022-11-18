export interface IUser {
	name: string;
	password: string;
}

export interface IRegisteredUser extends IUser {
	email: string;
}

export interface IAuthUser {
	id: string;
	name: string;
	status: string;
	token: string;
}

export interface IFullInfoUser {
	_id: string;
	name: string;
	email: string;
	status: string;
	dateOfRegistration: string;
	dateOfLastEnter: string;
}
