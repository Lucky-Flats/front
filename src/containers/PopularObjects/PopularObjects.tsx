import { Slider } from '@/components/Slider/Slider';
import { MAIN_CONTENT } from '@/config';
import { PopularObjectsItem } from '@/containers/PopularObjects/components/PopularObjectsItem';
import { POPULAR_OBJECTS_SLIDES } from '@/containers/PopularObjects/config/popularObject.config';
import React from 'react';
import { Block, BlockTitle } from '@/components/Block';

export function PopularObjects() {
    const slides = POPULAR_OBJECTS_SLIDES.map((slide, index) => (
        <PopularObjectsItem
            key={index}
            name={slide.name}
            description={slide.description}
            date={slide.date}
            image={slide.image}
        />
    ));

    return (
        <>
            <Block className="mb-8 pt-20 2xl:pt-[160px]">
                <BlockTitle className="max-w-[902px]">
                    {MAIN_CONTENT.popularObjectTitle}
                </BlockTitle>
            </Block>
            <div className="relative overflow-hidden">
                <Block>
                    <Slider
                        items={slides}
                        infinite={true}
                        className="relative"
                        center={true}
                        type={'full'}
                    />
                </Block>
            </div>
        </>
    );
}
