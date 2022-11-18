import {IFullInfoUser} from '../../../models/IUser';

export interface MyTableItemProps {
	user: IFullInfoUser;
	addChecked: (id: string) => void;
	checked: boolean;
}
