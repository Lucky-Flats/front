import React from 'react';
import { ButtonArrowIcon } from '@/assets/icons';
import { TArrowButtonProps } from '@/types';

export function ArrowButton({
    disabled,
    onClick,
    children,
    className,
    ...props
}: TArrowButtonProps) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`${className} flex items-center gap-0.5 py-1 pr-1 pl-2.5 rounded-lg group border border-dark border-solid
            h-[72px] sm:h-[45px] 2xl:pl-[56px] 2xl:pr-[7px] 2xl:py-[7px] 2xl:h-[90px]
            text-sm md:text-[9px] 2xl:text-[18px] 2xl:gap-2`}
            {...props}
        >
            {children}
            <div
                className="flex items-center justify-center rounded-full bg-green w-[60px] h-[60px]
            transition-all duration-std group-hover:-rotate-180
            sm:h-[38px] sm:w-[38px] 2xl:w-[76px] 2xl:h-[76px]"
            >
                <ButtonArrowIcon className="w-10 h-full sm:w-6" />
            </div>
        </button>
    );
}
