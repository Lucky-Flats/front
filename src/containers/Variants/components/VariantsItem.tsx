'use client';
import { DownloadButton } from '@/components';
import { BlockTitle } from '@/components/Block';
import { COMMON_CONTENT } from '@/config';
import { TVariantsItem } from '@/containers/Variants/types/TVariantsItem';
import useIsMobileWindow from '@/hooks/use-is-mobile-window';
import Image from 'next/image';
import React from 'react';

export function VariantsItem({ ...item }: TVariantsItem) {
    return (
        <div className="grid md:grid-cols-[240px_1fr] 2xl:grid-cols-[481px_1fr] gap-8 2xl:gap-16">
            {!useIsMobileWindow() && (
                <Image
                    src={item.image}
                    alt=""
                    className="max-w-[481px] w-full"
                />
            )}
            <div className="h-full flex flex-col xs:items-center md:items-start 2xl:gap-12">
                <BlockTitle className="mb-4">
                    <span>{item.title}</span>
                </BlockTitle>
                {useIsMobileWindow() && (
                    <Image
                        src={item.image}
                        alt=""
                        className="max-w-[481px] w-full"
                    />
                )}
                <div className="hidden md:flex flex-col gap-4 text-[10px] leading-none font-light [&*b]:font-semibold [&>p]:flex [&>p]:flex-col 2xl:text-xl">
                    {item.description}
                </div>
                <div className="flex mt-5 justify-center md:justify-start md:mt-auto">
                    <DownloadButton link={''}>
                        {COMMON_CONTENT.downloadCatalog}
                    </DownloadButton>
                </div>
            </div>
        </div>
    );
}
