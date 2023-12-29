import { TClientsItem } from '@/containers/Clients/types/TClientsItem';
import Image from 'next/image';
import React from 'react';

export function ClientsItem(item: TClientsItem) {
    return (
        <div className="grid items-center md:grid-cols-[253px_1fr] 2xl:grid-flow-col gap-12">
            <Image
                src={item.image}
                alt=""
                className="hidden max-w-[506px] w-full md:flex"
            />
            <div className="flex flex-col gap-6 md:gap-10 2xl:gap-14">
                <div className="flex items-center gap-2 2xl:gap-4 md:gap-5 2xl:gap-9">
                    <Image
                        src={item.photo}
                        alt=""
                        className="rounded-full max-w-[70px] 2xl:max-w-[131px] w-full"
                    />
                    <div className="flex flex-col gap-3 whitespace-pre-wrap">
                        <div className="text-sm leading-none font-medium md:text-[10px] 2xl:text-xl">
                            {item.name}
                        </div>
                        <div className="text-xs leading-none md:text-[8px] 2xl:text-base">
                            {item.shortComment}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-1.5 font-light text-xs leading-none md:text-[7px] 2xl:text-sm 2xl:gap-3">
                    {item.fullComment}
                </div>
            </div>
        </div>
    );
}
