'use client';
import { ENDPOINTS, SLIDER_RESPONSIVE } from '@/config';
import React, { useEffect, useRef, useState } from 'react';
import Carousel, { ButtonGroupProps } from 'react-multi-carousel';

import { ButtonArrowIcon } from '@/assets/icons';

type TSliderProps = {
    items: React.ReactNode[];
    responsive?: any;
    arrows?: boolean;
    dots?: boolean;
    type?: 'full';
    infinite?: boolean;
    center?: boolean;
    className?: string;
};

export function Slider({
    items,
    arrows = true,
    dots = false,
    infinite = false,
    type,
    responsive,
    className,
}: TSliderProps) {
    const itemRef = useRef<null | HTMLDivElement>(null);
    const sliderRef = useRef<null | HTMLDivElement>(null);
    const [additionalTransform, setAdditionalTransform] = useState(0);

    const buttonClasses =
        'flex items-center justify-center bg-green rounded-full w-10 h-10 2xl:w-[73px] 2xl:h-[73px]';

    useEffect(() => {
        const handleResize = () => {
            if (type !== 'full') {
                return;
            }

            if (itemRef.current && sliderRef.current) {
                const marginSize =
                    window.innerWidth >= ENDPOINTS.md.min
                        ? 600
                        : window.innerWidth >= ENDPOINTS.sm.min
                          ? 80
                          : 0;

                setAdditionalTransform(
                    (sliderRef.current?.clientWidth -
                        itemRef.current?.clientWidth -
                        marginSize) /
                        2
                );
            }
        };
        handleResize();

        window.addEventListener('resize', handleResize);

        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const ButtonGroup = ({
        next,
        previous,
        carouselState,
    }: ButtonGroupProps) => {
        const leftButton = (
            <button
                className={`${buttonClasses} rotate-180`}
                disabled={carouselState?.currentSlide === 0 && !infinite}
                onClick={() => previous && previous()}
            >
                <ButtonArrowIcon className="w-8 h-full 2xl:w-full" />
            </button>
        );

        const rightButton = (
            <button
                className={buttonClasses}
                disabled={
                    !!carouselState?.totalItems &&
                    carouselState?.currentSlide ===
                        carouselState?.totalItems -
                            carouselState?.slidesToShow &&
                    !infinite
                }
                onClick={() => next && next()}
            >
                <ButtonArrowIcon className="w-8 h-full 2xl:w-full" />
            </button>
        );

        return (
            <div
                className={`${
                    type === 'full'
                        ? 'md:top-[20%] md:-inset-x-[37px]'
                        : 'md:top-[50%] md:inset-x-0'
                } ${
                    carouselState?.currentSlide === 0
                        ? 'justify-end'
                        : 'justify-center md:justify-between'
                } flex relative gap-5 md:absolute md:w-auto md:-inset-x-[37px]`}
            >
                <>
                    {carouselState?.currentSlide !== 0 && leftButton}

                    {carouselState?.totalItems &&
                        carouselState?.currentSlide !==
                            carouselState?.totalItems -
                                carouselState?.slidesToShow &&
                        rightButton}
                </>
            </div>
        );
    };

    const CustomDot = ({ onClick, active }: any) => (
        <li>
            <button
                onClick={onClick}
                className={`${
                    active ? 'bg-green' : 'bg-gray'
                } w-7 h-1.5 2xl:w-11 2xl:h-2 rounded-[10px]`}
            />
        </li>
    );

    return (
        <div className={className} ref={sliderRef}>
            <Carousel
                arrows={false}
                renderButtonGroupOutside={arrows ?? true}
                customButtonGroup={arrows ? <ButtonGroup /> : null}
                infinite={infinite ?? false}
                responsive={responsive ?? SLIDER_RESPONSIVE}
                draggable={items.length > 1}
                swipeable={items.length > 1}
                // partialVisible={items.length !== 1}
                slidesToSlide={1}
                // centerMode={center ?? false}
                showDots={dots ?? false}
                customDot={<CustomDot />}
                dotListClass="flex gap-3 2xl:gap-5 items-center"
                containerClass={`${dots ? 'pb-10 2xl:pb-20' : 'pb-6 md:pb-0'} ${
                    type === 'full' ? 'overflow-visible' : ''
                }`}
                additionalTransfrom={additionalTransform}
            >
                {items.map((item, index) => (
                    <div
                        key={index}
                        ref={itemRef}
                        className={`${type === 'full' ? 'mx-2.5' : ''} h-full`}
                    >
                        {item}
                    </div>
                ))}
            </Carousel>
        </div>
    );
}
