import {IFullInfoUser} from '../../../models/IUser';

export interface userInitialState {
	users: IFullInfoUser[];
	isLoading: boolean;
	isError: string;
}
