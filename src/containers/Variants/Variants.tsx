import { Slider } from '@/components/Slider/Slider';
import { MAIN_CONTENT, ONE_SLIDE_SLIDER_RESPONSIVE } from '@/config';
import { VariantsItem } from '@/containers/Variants/components/VariantsItem';
import { VARIANTS_ITEMS } from '@/containers/Variants/config/variants.config';
import React from 'react';
import { Block, BlockTitle } from '@/components/Block';

export function Variants() {
    const slides = VARIANTS_ITEMS.map((item, index) => (
        <VariantsItem
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
        />
    ));

    return (
        <Block className="flex flex-col pt-20 gap-6 2xl:gap-12 2xl:pt-40">
            <BlockTitle className="md:max-w-[506px] 2xl:max-w-[1013px] md:ml-auto">
                {MAIN_CONTENT.variantsTitle}
            </BlockTitle>
            <div>
                <Slider
                    responsive={ONE_SLIDE_SLIDER_RESPONSIVE}
                    items={slides}
                    dots={true}
                    arrows={false}
                />
            </div>
        </Block>
    );
}
