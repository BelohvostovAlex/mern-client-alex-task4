import React, {FormEvent, useState, useEffect} from 'react';

import {Box, TextField, Typography, Button} from '@mui/material';
import {useInput} from '../../hooks/useInput';

import {LoginFormProps} from './interface';
import {makeStyles} from './styles';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {login} from '../../store/slices/authSlice/thunks';
import {SnackItem} from '../SnackItem/SnackItem';
import {useAppSelector} from '../../hooks/useAppSelector';
import {authSelector} from '../../store/slices/authSlice/authSlice';

export const LoginForm: React.FC<LoginFormProps> = ({
	title,
	btnTitle = 'Submit',
}) => {
	const {isError} = useAppSelector(authSelector);
	const dispatch = useAppDispatch();

	const [open, setOpen] = useState(false);
	const [name, handleName] = useInput('');
	const [pass, handlePass] = useInput('');

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
		dispatch(login({name, password: pass}));
	};

	useEffect(() => {
		if (isError) {
			handleClick();
		}
	}, [isError]);

	return (
		<Box sx={style.loginFormWrapper} component="form" onSubmit={handleSubmit}>
			<Typography>{title}</Typography>
			<Box sx={style.inputWrapper}>
				<TextField
					label="Name"
					variant="outlined"
					placeholder="Type ur name.."
					sx={style.textField}
					value={name}
					onChange={handleName}
				/>
			</Box>
			<Box sx={style.inputWrapper}>
				<TextField
					label="Password"
					type="password"
					variant="outlined"
					placeholder="Type ur pass.."
					sx={style.textField}
					value={pass}
					onChange={handlePass}
				/>
			</Box>
			<Button variant="contained" type="submit">
				{btnTitle}
			</Button>
			<SnackItem message={isError} handleClose={handleClose} open={open} />
		</Box>
	);
};
