import React from 'react';
import { TSvgIconProps } from '@/types';

export function ButtonArrowIcon({
    ...props
}: TSvgIconProps): React.ReactElement {
    return (
        <svg
            width="50"
            height="25"
            viewBox="0 0 50 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M33.3333 0C33.3333 1.325 34.8604 3.30357 36.4062 4.96429C38.3937 7.10714 40.7687 8.97679 43.4917 10.4036C45.5333 11.4732 48.0083 12.5 50 12.5M50 12.5C48.0083 12.5 45.5312 13.5268 43.4917 14.5964C40.7687 16.025 38.3937 17.8946 36.4062 20.0339C34.8604 21.6964 33.3333 23.6786 33.3333 25M50 12.5L0 12.5"
                stroke="white"
                strokeWidth="2"
            />
        </svg>
    );
}
