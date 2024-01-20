'use client';
import { Slider } from '@mui/material';
import React from 'react';
import '@/styles/range.css';

type TRangeProps = {
    min: number;
    max: number;
    step: number;
    value?: number | number[];
    onChange: (value: number | number[]) => void;
    title?: string;
};

export function Range({ min, max, step, value, onChange, title }: TRangeProps) {
    const marks = [
        {
            value: min,
            label: min,
        },
        {
            value: max,
            label: max,
        },
    ];
    return (
        <div className="relative w-full px-2.5">
            <Slider
                marks={marks}
                max={max}
                min={min}
                step={step}
                valueLabelDisplay="on"
                onChange={(e, value) => onChange(value)}
                value={value ?? min}
            />
            {title && (
                <div className="absolute left-1/2 -translate-x-1/2 bottom-2.5 text-sm font-light text-gray-text leading-1.1 md:text-[7px] xl:text-sm">
                    {title}
                </div>
            )}
        </div>
    );
}
