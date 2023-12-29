import { Block, BlockTitle } from '@/components/Block';
import { ABOUT, MAIN_CONTENT } from '@/config';
import Image from 'next/image';
import React from 'react';

import aboutImage from '@/assets/img/AboutImage.png';

export function About() {
    return (
        <Block className="grid md:grid-cols-[1.75fr_1fr] pt-14 gap-20 2xl:pt-[80px] flex justify-between">
            <div className="flex flex-col justify-between max-w-[887px] gap-y-5 md: gap-y-0">
                <div className="flex flex-col gap-3 md:gap-5 2xl:gap-10">
                    <div className="text-base leading-none md:text-sm 2xl:text-[28px]">
                        {MAIN_CONTENT.landingTitle}
                    </div>
                    <div className="text-[26px] leading-1.1 text-dark font-light md:text-[21px] 2xl:text-[42px]">
                        {ABOUT.workSince}
                    </div>
                </div>
                <BlockTitle className="flex text-[26px] leading-1.1 md:justify-end">
                    {ABOUT.weAreTogether}
                </BlockTitle>
            </div>

            <Image
                src={aboutImage}
                alt=""
                objectFit="cover"
                className="hidden md:flex"
            />
        </Block>
    );
}
