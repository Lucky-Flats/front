import React from 'react';

import {
    FormControl,
    MenuItem,
    Select,
    SelectChangeEvent,
} from '@mui/material';

type TCustomSelectProps = {
    options: {
        label: string | React.ReactNode;
        value: string | number;
    }[];
    onChange: (value: string | number) => void;
    emptyTitle: string;
    value?: string;
};

export function CustomSelect({
    options,
    onChange,
    emptyTitle,
    value,
}: TCustomSelectProps) {
    const onChangeHandler = (event: SelectChangeEvent) => {
        onChange(event.target.value);
    };

    return (
        <div className="w-full">
            <FormControl fullWidth>
                <Select onChange={onChangeHandler} value={value} displayEmpty>
                    <MenuItem value={''}>{emptyTitle}</MenuItem>
                    {options.map((option, index) => (
                        <MenuItem key={index} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
