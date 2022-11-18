import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';

import {useAppSelector} from '../../hooks/useAppSelector';
import {authSelector} from '../../store/slices/authSlice/authSlice';

import {pathesEnum, privateRoutes, publicRoutes} from './interface';

export const AppRouter = () => {
	const {isAuth} = useAppSelector(authSelector);

	return isAuth ? (
		<Routes>
			{privateRoutes.map((route) => (
				<Route key={route.path} path={route.path} element={<route.element />} />
			))}
			<Route path="/*" element={<Navigate to={pathesEnum.MAIN} />} />
		</Routes>
	) : (
		<Routes>
			{publicRoutes.map((route) => (
				<Route key={route.path} path={route.path} element={<route.element />} />
			))}
			<Route path="/*" element={<Navigate to={pathesEnum.LOGIN} />} />
		</Routes>
	);
};
