import React from 'react';

type TMapListItemProps = {
    title: string;
    description: string;
};

export function MapListItem({ title, description }: TMapListItemProps) {
    return (
        <div className="h-full flex flex-col gap-8 border-t border-t-gray py-6 leading-1.1">
            <div className="text-[18px] text-green font-semibold md:text-xs 2xl:text-2xl">
                {title}
            </div>
            <div className="text-sm leading-1.1 text-gray-text md:text-[10px] 2xl:text-xl">
                {description}
            </div>
        </div>
    );
}
