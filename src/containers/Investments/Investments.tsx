import { Block, BlockTitle } from '@/components/Block';
import { ABOUT, COMMON_CONTENT } from '@/config';
import Image from 'next/image';
import React from 'react';
import investments1 from '@/assets/img/Investments-1.png';
import investments2 from '@/assets/img/Investments-2.png';
import investmentDiagram from '@/assets/img/InvestmentDiagram.png';

import gridStyles from '@/styles/grids.module.scss';

export function Investments() {
    return (
        <Block className="grid grid-flow-row pt-14 gap-6 md:gap-0 md:grid-cols-[1.2fr_1fr] 2xl:grid-cols-[1.1fr_1fr] md:pt-20 2xl:pt-40 md:gap-14 2xl:gap-[116px]">
            <div className="flex flex-col gap-4 md:gap-0 items-end">
                <BlockTitle className="w-full md:pl-[219px] 2xl:pl-[400px]">
                    {ABOUT.investmentsTitle}
                </BlockTitle>
                <div className="grid grid-flow-row gap-6 md:grid-cols-2 md:gap-5 md:-mt-5 2xl:-mt-10">
                    <div className="flex flex-col gap-6">
                        <Image
                            src={investments1}
                            alt=""
                            className="max-h-[390px] md:max-w-[187px] md:max-h-[245px] 2xl:max-h-[490px]"
                        />
                        <span className="text-sm leading-1.1 md:text-[8px] 2xl:text-base">
                            {ABOUT.investmentsLeft.analyse}
                        </span>
                    </div>
                    <div className="flex flex-col gap-6 md:mt-[140px] 2xl:mt-[245px]">
                        <Image
                            src={investments2}
                            alt=""
                            className="max-h-[390px] md:max-h-[245px] 2xl:max-h-[490px]"
                        />
                        <span className="text-sm leading-1.1 md:text-[8px] 2xl:text-base">
                            {ABOUT.investmentsLeft.specialTerms}
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-10 md:gap-[75px] 2xl:gap-[150px] h-full 2xl:mt-[68px]">
                <div className="text-base leading-1.1 font-light md:ml-4 md:text-[10px] 2xl:ml-8 2xl:text-xl">
                    {ABOUT.investmentsRight.prices}
                </div>
                <div
                    className={`${gridStyles.investment} grid items-start gap-y-6 gap-x-2.5 md:gap-x-[58px] md:gap-y-[70px] h-full pb-[70px] 2xl:gap-[116px]`}
                >
                    <a
                        download=""
                        className={`${gridStyles.investment__btn} flex items-center self-center justify-center text-dark font-semibold border border-dark border-solid rounded-full h-[70px] w-[70px]
                        transition-all duration-std hover:text-white hover:bg-green hover:border-green
                        md:h-[92px] md:w-[92px] 2xl:h-[184px] 2xl:w-[184px]`}
                    >
                        <span className="leading-1.1 max-w-[54px] md:max-w-[71px] 2xl:max-w-[143px] text-[4px] md:text-[6px] 2xl:text-xs">
                            {COMMON_CONTENT.getCatalog}
                        </span>
                    </a>
                    <div
                        className={`${gridStyles.investment__diagram} flex flex-col gap-10 leading-1.1 text-sm md:pr-11 md:text-[8px] 2xl:text-base`}
                    >
                        <div>{ABOUT.investmentsRight.diagramTitle}</div>
                        <Image src={investmentDiagram} alt="" />
                    </div>
                    <div
                        className={`${gridStyles.investment__description} max-x-[500px] font-light leading-1.1 text-xs md:max-w-none md:text-[8px] 2xl:text-base`}
                    >
                        {ABOUT.investmentsRight.help}
                    </div>
                </div>
            </div>
        </Block>
    );
}
