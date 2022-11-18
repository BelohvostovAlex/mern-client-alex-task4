import React from 'react';

import {TableRow, TableCell, Checkbox} from '@mui/material';

import {MyTableItemProps} from './interface';
import {makeStyles} from './styles';

export const MyTableItem: React.FC<MyTableItemProps> = ({
	user,
	addChecked,
	checked,
}) => {
	const style = makeStyles();

	const handleChecked = () => {
		addChecked(user._id);
	};

	return (
		<TableRow sx={style.rowWrapper}>
			<TableCell sx={style.cellWrapper}>
				<Checkbox onChange={handleChecked} checked={checked} />
			</TableCell>
			<TableCell sx={style.cellWrapper}>{user._id}</TableCell>
			<TableCell sx={style.cellWrapper}>{user.name}</TableCell>
			<TableCell sx={style.cellWrapper}>{user.email}</TableCell>
			<TableCell sx={style.cellWrapper}>{user.status}</TableCell>
			<TableCell sx={style.cellWrapper}>{user.dateOfRegistration}</TableCell>
			<TableCell sx={style.cellWrapper}>{user.dateOfLastEnter}</TableCell>
		</TableRow>
	);
};
