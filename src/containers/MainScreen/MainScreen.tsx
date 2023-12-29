import { PhoneIcon, TelegramIcon } from '@/assets/icons';
import mainBgImage from '@/assets/img/MainBgImage.jpg';
import { DownloadButton } from '@/components';
import { Block } from '@/components/Block/Block';
import { COMMON_CONTENT, MAIN_CONTENT, PHONE_NUMBER } from '@/config';
import Image from 'next/image';
import React from 'react';
import gridStyles from '@/styles/grids.module.scss';

export function MainScreen() {
    return (
        <div className="relative h-[725px] md:h-[540px] lg:h-[700px] 2xl:h-[1080px] py-[42px]">
            <Image src={mainBgImage} alt="main block" fill objectFit="cover" />
            <div className="bg-main-tint-gradient absolute inset-0" />

            <Block className="h-full">
                <div
                    className={`${gridStyles.main} h-full grid gap-y-[5px] gap-x-4 justify-between relative z-10 text-white whitespace-pre-wrap`}
                >
                    <div
                        className={`${gridStyles.main__logo} flex flex-col md:flex-row items-start gap-2`}
                    >
                        <h3 className="font-base leading-none font-semibold 2xl:text-[32px]">
                            {MAIN_CONTENT.landingTitle}
                        </h3>
                        <span className="text-[10px] md:text-[7px] 2xl:text-sm">
                            {MAIN_CONTENT.realEstateAgency}
                        </span>
                    </div>

                    <div className="hidden md:block max-w-[286px] absolute top-0 left-1/2 -translate-x-1/2 text-[8px] [&>span]:font-semibold">
                        {MAIN_CONTENT.thousandDeals}
                    </div>

                    <div
                        className={`${gridStyles.main__contact} hidden md:flex flex-col gap-0.5 text-right justify-self-end`}
                    >
                        <div className="flex items-center justify-end gap-2 text-[8px] leading-none font-semibold 2xl:text-base">
                            <PhoneIcon className="w-4 h-4" />
                            {PHONE_NUMBER.text}
                        </div>
                        <div className="text-[6px] leading-none 2xl:text-xs">
                            {MAIN_CONTENT.contactUsEasy}
                        </div>
                    </div>

                    <div
                        className={`${gridStyles.main__title} flex items-end mb-[11px] max-w-[566px] 2xl:max-w-[1132px]`}
                    >
                        <div className="text-[28px] leading-none font-light [&>span]:text-green [&>span]:font-semibold xs:text-4xl 2xl:text-7xl">
                            {MAIN_CONTENT.startInNewApartment}
                        </div>
                    </div>
                    <div
                        className={`${gridStyles.main__content} flex justify-end flex-col gap-5 md:gap-8`}
                    >
                        <div className="text-sm leading-1.1 xs:text-xs 2xl:text-2xl font-normal">
                            {MAIN_CONTENT.mainDescription}
                        </div>
                        <div className="flex flex-col gap-3 md:flex-row 2xl::gap-6 mt-3 items-center">
                            <DownloadButton
                                link={''}
                                className="font-semibold justify-between text-sm md:text-[9px] 2xl:text-[18px]"
                            >
                                {COMMON_CONTENT.downloadCatalog}
                            </DownloadButton>
                            <span className="leading-1.1 font-light text-sm md:text-[9px] text-center md:text-left">
                                {MAIN_CONTENT.selectAndDownload}
                            </span>
                        </div>
                    </div>

                    <div
                        className={`${gridStyles.main__checked} text-sm flex flex-col md:justify-start md:text-[9px] md:text-right [&>span]:font-semibold`}
                    >
                        {MAIN_CONTENT.checked}
                    </div>

                    <div
                        className={`${gridStyles.main__ask} flex justify-end md:items-end`}
                    >
                        <button
                            className={`flex gap-1 items-center justify-center h-8 px-4 bg-transparent
                    border-white border-solid border rounded-lg shrink-0 font-light text-[8px] leading-1.1 transition-all duration-std group
                    hover:bg-white hover:border-green hover:text-green 2xl:text-base 2xl:h-[65px]`}
                        >
                            <TelegramIcon className="w-5 h-5 shrink-0 transition-all duration-std group-hover:fill-green" />
                            {COMMON_CONTENT.ask}
                        </button>
                    </div>
                </div>
            </Block>
        </div>
    );
}
