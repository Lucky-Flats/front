import { TBuyingProcessCard } from '@/containers/BuyingProcess/types/TBuyingProcessCard';
import React from 'react';

type TBuyingCardProps = {
    index: number;
    card: TBuyingProcessCard;
};

export function BuyingProcessCard({ index, card }: TBuyingCardProps) {
    return (
        <div
            className="flex-1 flex flex-col justify-between font-light h-40 rounded-[20px] border border-solid border-dark-border p-4
        md:h-[108px] 2xl:h-[217px] 2xl:p-8"
        >
            <div className="flex justify-between gap-4 leading-none">
                <div className="text-[18px] md:text-xs 2xl:text-2xl ">
                    {card.title}
                </div>
                <div className="text-4xl -mt-4 leading-none text-gray font-bold md:mt-0 md:text-[27px] 2xl:text-[54px]">
                    {index}
                </div>
            </div>
            <div className="text-xs leading-none md:text-[7px] 2xl:text-sm">
                {card.description}
            </div>
        </div>
    );
}
