import React, {useState} from 'react';

import {
	Box,
	Table,
	TableHead,
	TableRow,
	TableBody,
	Checkbox,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AccessibilityIcon from '@mui/icons-material/Accessibility';

import {TableProps} from './interface';
import {MyTableItem} from './MyTableItem/MyTableItem';
import {makeStyles} from './styles';
import {
	blockUserWebService,
	unblockUserWebService,
} from '../../service/userWebService';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {
	blockUserStatus,
	deleteUser,
	unblockUserStatus,
} from '../../store/slices/userSlice/userSlice';
import {useAppSelector} from '../../hooks/useAppSelector';
import {authSelector} from '../../store/slices/authSlice/authSlice';
import {logout} from '../../store/slices/authSlice/thunks';
import {deleteUserWebService} from '../../service/authWebService';
import {MyButton} from '../MyButton/MyButton';
import {findUsers} from '../../helpers/findUsers';

export const MyTable: React.FC<TableProps> = ({users}) => {
	const {user} = useAppSelector(authSelector);
	const [allChecked, setAllChecked] = useState<string[]>([]);
	const [isCheck, setIsCheck] = useState(false);

	const dispatch = useAppDispatch();

	const addChecked = (id: string) => {
		setAllChecked((prev) => {
			if (prev.includes(id)) {
				return prev.filter((item) => item !== id);
			} else {
				return [...prev, id];
			}
		});
	};

	const addAllChecked = () => {
		setAllChecked((prev) => {
			const isAll = users.every((user) => prev.includes(user._id));
			if (isAll) {
				setIsCheck(false);
				return [];
			} else {
				setIsCheck(true);
				return prev.concat(
					users
						.filter((item) => !prev.includes(item._id))
						.map((item) => item._id)
				);
			}
		});
	};

	const handleUnblock = () => {
		const candidates = findUsers(allChecked, users);

		candidates.forEach(async (candidate) => {
			if (candidate && candidate.status === 'Blocked') {
				await unblockUserWebService(candidate._id);
				dispatch(unblockUserStatus(candidate._id));
				setAllChecked((prev) => prev.filter((item) => item !== candidate._id));
				setIsCheck(false);
			}
		});
	};
	const handleBlock = async () => {
		const candidates = findUsers(allChecked, users);

		if (candidates.find((candidate) => candidate?._id === user.id)) {
			dispatch(logout());
		}

		candidates.forEach(async (candidate) => {
			if (candidate && candidate.status === 'Active') {
				await blockUserWebService(candidate._id);
				dispatch(blockUserStatus(candidate._id));
				setAllChecked((prev) => prev.filter((item) => item !== candidate._id));
				setIsCheck(false);
			}
		});
	};
	const handleDelete = () => {
		const candidates = findUsers(allChecked, users);

		if (candidates.find((candidate) => candidate?._id === user.id)) {
			dispatch(logout());
		}

		candidates.forEach(async (candidate) => {
			if (candidate) {
				await deleteUserWebService(candidate._id, '/auth/users');

				dispatch(deleteUser(candidate._id));
				setAllChecked((prev) => prev.filter((item) => item !== candidate._id));
				setIsCheck(false);
			}
		});
	};

	const style = makeStyles();
	return (
		<Box sx={style.wrapper}>
			<Checkbox
				onClick={addAllChecked}
				checked={isCheck}
				sx={style.checkboxBtn}
			/>
			<MyButton
				onClick={handleBlock}
				disabled={allChecked.length < 1}
				text="Block"
			/>
			<MyButton
				onClick={handleUnblock}
				disabled={allChecked.length < 1}
				text="Unblock"
				icon={<AccessibilityIcon />}
			/>

			<MyButton
				onClick={handleDelete}
				disabled={allChecked.length < 1}
				icon={<DeleteIcon sx={style.deleteColor} />}
			/>
			<Table sx={style.tableWrapper}>
				<TableHead>
					<TableRow sx={style.rowWrapper}></TableRow>
				</TableHead>
				<TableBody>
					{users.map((user) => (
						<MyTableItem
							user={user}
							key={user._id}
							addChecked={addChecked}
							checked={allChecked.includes(user._id)}
						/>
					))}
				</TableBody>
			</Table>
		</Box>
	);
};
