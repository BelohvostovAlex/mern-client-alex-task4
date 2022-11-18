import React from 'react';

export interface MyButtonProps {
	text?: string;
	icon?: React.ReactElement;
	onClick: () => void;
	disabled: boolean;
}
