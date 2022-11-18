import React from 'react';

import {Box} from '@mui/material';
import {LoginForm} from '../../components/LoginForm/LoginForm';
import {RegisterForm} from '../../components/RegisterForm/RegisterForm';

import {makeStyles} from './styles';

export const Login: React.FC = () => {
	const style = makeStyles();
	return (
		<Box sx={style.loginPageWrapper}>
			<LoginForm title="Log in" />
			<RegisterForm title="Register" />
		</Box>
	);
};
