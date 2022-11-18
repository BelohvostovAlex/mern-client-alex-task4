import React, {useEffect} from 'react';

import {Box, Button} from '@mui/material';

import {useAppDispatch} from '../../hooks/useAppDispatch';
import {logout} from '../../store/slices/authSlice/thunks';
import {MyTable} from '../../components/Table/MyTable';
import {useAppSelector} from '../../hooks/useAppSelector';
import {userSelector} from '../../store/slices/userSlice/userSlice';
import {getUsers} from '../../store/slices/userSlice/thunks';

export const Main: React.FC = () => {
	const dispatch = useAppDispatch();
	const {users} = useAppSelector(userSelector);

	const handleLogout = async () => {
		dispatch(logout());
	};

	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch]);

	return (
		<Box>
			<Button onClick={handleLogout}>Logout</Button>
			{users && <MyTable users={users} />}
		</Box>
	);
};
