import React from 'react';

type TBlockTitleProps = {
    children: React.ReactNode;
    className?: string;
};

export function BlockTitle({ children, className }: TBlockTitleProps) {
    return (
        <h2
            className={`${className} text-[21px] leading-1.1 text-dark font-light [&>span]:font-semibold [&>span]:text-green 
            2xl:text-[42px] `}
        >
            {children}
        </h2>
    );
}
