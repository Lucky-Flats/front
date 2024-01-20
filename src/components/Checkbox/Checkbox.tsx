import { Checkbox, FormControlLabel } from '@mui/material';
import React from 'react';
import '@/styles/checkbox.css';

type TCheckboxProps = {
    label: string;
    onChange: (checked: boolean) => void;
    checked?: boolean;
};

export function CustomCheckbox({ label, onChange, checked }: TCheckboxProps) {
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.checked);
    };

    return (
        <FormControlLabel
            control={<Checkbox value={checked} onChange={onChangeHandler} />}
            label={label}
        />
    );
}
