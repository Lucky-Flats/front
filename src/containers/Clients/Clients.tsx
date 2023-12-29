import { Block, BlockTitle } from '@/components/Block';
import { Slider } from '@/components/Slider/Slider';
import { MAIN_CONTENT, ONE_SLIDE_SLIDER_RESPONSIVE } from '@/config';
import { ClientsItem } from '@/containers/Clients/components/ClientsItem';
import { CLIENTS_ITEMS } from '@/containers/Clients/config/clients.config';
import React from 'react';

export function Clients() {
    const slides = CLIENTS_ITEMS.map((item, index) => (
        <ClientsItem key={index} {...item} />
    ));

    return (
        <Block className="flex flex-col gap-6 2xl:gap-12 pt-20 2xl:pt-40">
            <BlockTitle>{MAIN_CONTENT.clientsTitle}</BlockTitle>
            <div className="flex flex-col gap-9 md:gap-6">
                <div
                    className="flex flex-col gap-8 justify-between font-light text-sm leading-1.1
                md:flex-row md:items-center md:text-[10px] 2xl:gap-[95px] 2xl:text-xl"
                >
                    <div className="flex flex-col gap-2.5 2xl:gap-5 max-w-[958px]">
                        {MAIN_CONTENT.bestPartQuote}
                    </div>
                    <div>{MAIN_CONTENT.checkFeedback}</div>
                </div>
                <div className="relative md:px-[70px] 2xl:px-[133px]">
                    <Slider
                        items={slides}
                        infinite={true}
                        center={false}
                        responsive={ONE_SLIDE_SLIDER_RESPONSIVE}
                    />
                </div>
            </div>
        </Block>
    );
}
