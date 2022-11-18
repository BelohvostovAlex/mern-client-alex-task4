import React from 'react';

import {Login} from '../../pages/login/Login';
import {Main} from '../../pages/main/Main';

export interface IRoute {
	path: string;
	element: React.ComponentType;
}

export enum pathesEnum {
	LOGIN = '/login',
	MAIN = '/',
}

export const publicRoutes: IRoute[] = [
	{path: pathesEnum.LOGIN, element: Login},
];

export const privateRoutes: IRoute[] = [{path: pathesEnum.MAIN, element: Main}];
