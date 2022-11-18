import React from 'react';

import {Box, Button} from '@mui/material';
import {MyTableToolbarProps} from './interface';

export const MyTableToolbar: React.FC<MyTableToolbarProps> = ({onBlock}) => {
	return (
		<Box>
			<Button onClick={onBlock}>Block</Button>
			<Button>Unblock</Button>
			<Button>Delete</Button>
		</Box>
	);
};
