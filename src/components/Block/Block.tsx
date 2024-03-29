import React from 'react';

type TBlockProps = {
    children: React.ReactNode;
    className?: string;
};

export function Block({ children, className }: TBlockProps) {
    return (
        <section
            className={`${className} max-w-[800px] lg:max-w-[1100px] xl:max-w-[1320px] 2xl:max-w-[1580px] mx-auto px-[10px] relative`}
        >
            {children}
        </section>
    );
}
