import React from 'react';

export interface SnackItemProps {
	handleClose: (event: React.SyntheticEvent | Event, reason?: string) => void;
	open: boolean;
	duration?: number;
	message: string;
}
