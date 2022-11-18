import React from 'react';

import {Button} from '@mui/material';

import {MyButtonProps} from './interface';

export const MyButton: React.FC<MyButtonProps> = ({
	onClick,
	text,
	icon,
	disabled,
}) => {
	return (
		<Button onClick={onClick} disabled={disabled}>
			{text}
			{icon}
		</Button>
	);
};
