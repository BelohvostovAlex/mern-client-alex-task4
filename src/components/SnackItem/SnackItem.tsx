import React from 'react';

import {Snackbar, IconButton} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import {SnackItemProps} from './interface';

export const SnackItem: React.FC<SnackItemProps> = ({
	message,
	open,
	duration = 6000,
	handleClose,
}) => {
	const action = (
		<React.Fragment>
			<IconButton
				size="small"
				aria-label="close"
				color="inherit"
				onClick={handleClose}
			>
				<CloseIcon fontSize="small" />
			</IconButton>
		</React.Fragment>
	);
	return (
		<Snackbar
			open={open}
			autoHideDuration={duration}
			onClose={handleClose}
			message={message}
			action={action}
		/>
	);
};
