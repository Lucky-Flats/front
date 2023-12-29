import { COMMON_CONTENT } from '@/config';
import { TPopularObjectItem } from '@/containers/PopularObjects/types/TPopularObjectItem';
import Image from 'next/image';
import React from 'react';

export function PopularObjectsItem(item: TPopularObjectItem) {
    return (
        <div className="h-full flex flex-col gap-12 rounded-[20px] leading-1.1 font-light">
            <Image src={item.image} alt={item.name} className="max-h-[290px]" />
            <div className="h-full flex flex-col gap-6">
                <div className="flex flex-col gap-8">
                    <div className="text-[18px] leading-none 2xl:text-4xl">
                        {item.name}
                    </div>
                    <div className="text-[10px] 2xl:text-base">
                        {item.description}
                    </div>
                </div>
                <div className="flex justify-between text-xs leading-none pt-8 mt-auto border-t border-t-dark-border 2xl:text-xl">
                    <div>{COMMON_CONTENT.dueDate}</div>
                    <div>{item.date}</div>
                </div>
            </div>
        </div>
    );
}
