import {IFullInfoUser} from '../models/IUser';

export const findUsers = (initArr: string[], checkThrough: IFullInfoUser[]) => {
	const candidates = initArr.map((item) =>
		checkThrough.find((user) => user._id === item)
	);

	return candidates;
};
