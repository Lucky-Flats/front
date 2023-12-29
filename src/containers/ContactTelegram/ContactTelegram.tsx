'use client';
import { Block, BlockTitle } from '@/components/Block';
import { COMMON_CONTENT, CONTACT, MAIN_CONTENT } from '@/config';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import telegramImage from '@/assets/img/ContactTelegramPhoneImage.png';
import QRCode from 'react-qr-code';
import textBubbleImage from '@/assets/img/textBubbleImage.png';

export function ContactTelegram() {
    const [isIntersecting, setIsIntersecting] = useState(false);

    const refRoot = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!refRoot.current) {
            return;
        }

        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        });
        observer.observe(refRoot.current as Element);
        return () => observer.disconnect();
    }, []);

    return (
        <Block>
            <div className="max-w-[1264px] mx-auto px-[16px] relative flex flex-col gap-4 pt-20 2xl:pt-40">
                <BlockTitle className="md:max-w-[356px] 2xl:max-w-[712px]">
                    {CONTACT.telegramTitle}
                </BlockTitle>
                <div
                    className="grid grid-cols-[1fr_2fr] md:flex gap-12 justify-between"
                    ref={refRoot}
                >
                    <div className="flex flex-col justify-end pb-7 2xl:pb-14">
                        <div className="max-w-[320px] w-full flex flex-col gap-5 items-center">
                            <QRCode
                                value={'https://t.me/LuckyFlats'}
                                className="w-full h-full md:max-w-[176px] 2xl:max-w-none"
                            />
                            <div className="text-base leading-1.1 font-light">
                                @luckyflats
                            </div>
                            <button
                                className="min-h-[35px] w-full rounded-[35px] flex items-center justify-center bg-green text-[10px] leading-none text-white font-semibold
                transition-all duration-std hover:bg-dark 2xl:text-xl 2xl:min-h-[70px] 2xl:rounded-[70px]"
                            >
                                {COMMON_CONTENT.subscribe}
                            </button>
                        </div>
                    </div>
                    <div className="flex md:-mt-[69px] 2xl:-mt-[138px]">
                        <Image
                            src={telegramImage}
                            alt=""
                            objectFit="contain"
                            className="md:max-w-[240px] 2xl:max-w-[409px]"
                        />
                        <div
                            className={`${
                                isIntersecting
                                    ? 'md:opacity-100 md:-translate-y-0 2xl:translate-y-[280px]'
                                    : 'translate-y-1/2 opacity-0'
                            } hidden md:block absolute h-[204px] transition-all duration-700 -translate-x-[210px] md:-translate-x-[276px] md:w-[350px] 2xl:w-[485px]`}
                        >
                            <div className="relative h-full">
                                <Image
                                    src={textBubbleImage}
                                    objectFit="contain"
                                    alt=""
                                    fill
                                    className="-z-10"
                                />
                                <div className="hidden md:block absolute z-10 top-[70px] left-[40px] max-w-[230px] 2xl:top-[38px] 2xl:max-w-[292px] 2xl:left-[72px] text-[10px] leading-1.1 font-light text-white [&>span]:font-semibold 2xl:text-xl">
                                    {MAIN_CONTENT.subscribeAndReceive}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Block>
    );
}
