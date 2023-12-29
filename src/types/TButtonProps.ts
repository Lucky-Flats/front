import React from 'react';

export type TArrowButtonProps = React.ComponentPropsWithRef<'button'> & {
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    children: React.ReactNode;
    className?: string;
};
