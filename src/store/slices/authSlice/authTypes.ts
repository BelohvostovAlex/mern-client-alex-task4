import {IAuthUser} from '../../../models/IUser';

export interface authInitialState {
	isAuth: boolean;
	user: IAuthUser;
	isLoading: boolean;
	isError: string;
}
