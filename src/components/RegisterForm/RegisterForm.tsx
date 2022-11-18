import React, {FormEvent, useState} from 'react';

import {Box, TextField, Typography, Button} from '@mui/material';

import {useInput} from '../../hooks/useInput';
import {registerWebService} from '../../service/authWebService';

import {RegisterFormProps} from './interface';
import {makeStyles} from './styles';
import {SnackItem} from '../SnackItem/SnackItem';

export const RegisterForm: React.FC<RegisterFormProps> = ({
	title,
	btnTitle = 'Submit',
}) => {
	const [open, setOpen] = useState(false);
	const [name, handleName, clearName] = useInput('');
	const [pass, handlePass, clearPass] = useInput('');
	const [email, handleEmail, clearEmail] = useInput('');
	const style = makeStyles();

	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = (
		event: React.SyntheticEvent | Event,
		reason?: string
	) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const data = await registerWebService(
			{name, password: pass, email},
			'/auth/registration'
		);
		if (data) {
			handleClick();
			clearName();
			clearPass();
			clearEmail();
		}
	};

	return (
		<Box component="form" sx={style.loginFormWrapper} onSubmit={handleSubmit}>
			<Typography>{title}</Typography>
			<Box sx={style.inputWrapper}>
				<TextField
					label="Name"
					variant="outlined"
					placeholder="Type ur name.."
					value={name}
					onChange={handleName}
					sx={style.textField}
				/>
			</Box>
			<Box sx={style.inputWrapper}>
				<TextField
					label="Password"
					variant="outlined"
					placeholder="Type ur pass.."
					value={pass}
					type="password"
					onChange={handlePass}
					sx={style.textField}
				/>
			</Box>
			<Box sx={style.inputWrapper}>
				<TextField
					label="Email"
					variant="outlined"
					placeholder="Type ur email.."
					type="email"
					value={email}
					onChange={handleEmail}
					sx={style.textField}
				/>
			</Box>
			<Button variant="contained" type="submit">
				{btnTitle}
			</Button>
			<SnackItem
				message="You are successfully registered"
				handleClose={handleClose}
				open={open}
			/>
		</Box>
	);
};
