import { DownloadPdfIcon } from '@/assets/icons';
import React from 'react';

type TDownloadButtonProps = {
    link: string;
    children: React.ReactNode;
    className?: string;
};

export function DownloadButton({
    link,
    children,
    className,
}: TDownloadButtonProps) {
    return (
        <a
            download={link}
            className={`${className} cursor-pointer flex items-center gap-x-5 justify-between bg-white text-dark gap-2 py-1 pr-1 pl-11 rounded-lg group border border-dark border-solid transition-all duration-std
            hover:border-green hover:bg-green hover:text-white
            text-sm font-semibold md:text-[9px] 2xl:text-[18px]
            h-[72px] sm:h-[45px] sm:pl-7 2xl:pl-[56px] 2xl:pr-[7px] 2xl:py-[7px] 2xl:h-[90px]`}
        >
            {children}
            <div
                className="flex shrink-0 flex-col gap-1 items-center justify-center rounded-full bg-green text-white w-[60px] h-[60px]
            transition-all duration-std group-hover:bg-white group-hover:text-dark
            sm:h-[38px] sm:w-[38px] 2xl:w-[76px] 2xl:h-[76px] "
            >
                <DownloadPdfIcon className="w-[18px] h-[18px] sm:h-3 sm:w-3 group-hover:fill-dark transition-all duration-std" />
                <span className="leading-none text-[6px] sm:text-[4px] 2xl:text-[10px] font-semibold">
                    12 Мб
                </span>
            </div>
        </a>
    );
}
