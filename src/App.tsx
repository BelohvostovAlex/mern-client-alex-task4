import React from 'react';

import {AppRouter} from './components/AppRouter/AppRouter';
import {useAppDispatch} from './hooks/useAppDispatch';
import {useAppSelector} from './hooks/useAppSelector';
import {authSelector} from './store/slices/authSlice/authSlice';
import {logout, setUser} from './store/slices/authSlice/thunks';

export const App = () => {
	const {isError} = useAppSelector(authSelector);
	const dispatch = useAppDispatch();

	React.useEffect(() => {
		if (localStorage.getItem('name') && localStorage.getItem('auth')) {
			const name = localStorage.getItem('name');
			dispatch(setUser(name!));

			if (isError) {
				dispatch(logout());
			}
		}
	}, [isError]);

	return <AppRouter />;
};
