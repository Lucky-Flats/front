import { MapImage } from '@/assets/Map';
import { DownloadButton } from '@/components';
import { Block, BlockTitle } from '@/components/Block';
import { COMMON_CONTENT } from '@/config';
import { MapList } from '@/containers/Map/components/MapList';
import { MAP_CONTENT } from '@/containers/Map/config/map.config';
import React from 'react';

import gridStyles from '@/styles/grids.module.scss';

export function MapComponent() {
    return (
        <Block className="pt-20 2xl:pt-40">
            <div
                className={`${gridStyles.map} grid md:grid-cols-2 gap-y-4 gap-x-5`}
            >
                <div
                    className={`${gridStyles.map__description} text-sm leading-1.1 md:text-[10px] 2xl:text-xl`}
                >
                    {MAP_CONTENT.description}
                </div>
                <div className={`${gridStyles.map__map} 2xl:mt-12 self-center`}>
                    <MapImage className="w-full h-full" />
                </div>
                <div className={gridStyles.map__list}>
                    <MapList />
                </div>
                <div
                    className={`${gridStyles.map__catalog} flex flex-col gap-8 max-w-[558px] mt-auto pr-[78px] ml-auto`}
                >
                    <BlockTitle>{MAP_CONTENT.title}</BlockTitle>
                    <DownloadButton
                        link={''}
                        className="max-w-[375px] font-semibold"
                    >
                        {COMMON_CONTENT.downloadCatalog}
                    </DownloadButton>
                </div>
            </div>
        </Block>
    );
}
