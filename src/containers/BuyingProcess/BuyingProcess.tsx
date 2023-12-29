'use client';
import { ArrowButton } from '@/components';
import { Block } from '@/components/Block';
import { BUYING_PROCESS_CARDS } from '@/containers/BuyingProcess/config/buyingProcess.config';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

import { BlockTitle } from '@/components/Block/BlockTitle';
import { BuyingProcessCard } from '@/containers/BuyingProcess/components/BuyingProcessCard';
import { BUYING_PROCESS, COMMON_CONTENT } from '@/config';
import rightImage from '@/assets/img/BuyingProcessRightImage.png';
import leftImage from '@/assets/img/BuyingProcessLeftImage.png';

import gridStyles from '@/styles/grids.module.scss';

export function BuyingProcess() {
    const cardsLineClasses =
        'flex flex-col w-full gap-2.5 md:flex-row 2xl:gap-5';
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

    const imagesClasses = `${
        isIntersecting ? 'scale-100' : 'scale-0'
    } relative w-full transition-all duration-700`;

    return (
        <Block className="pt-20 2xl:pt-40">
            <div className={gridStyles.buying} ref={refRoot}>
                <div
                    className={`${gridStyles.buying__title} ${
                        isIntersecting ? 'translate-y-0' : 'translate-y-1/2'
                    } flex flex-col gap-2.5 transition-all duration-700 2xl:gap-5`}
                >
                    <BlockTitle>{BUYING_PROCESS.fullCycle}</BlockTitle>
                    <div className="text-xs leading-1.1 font-light 2xl:text-2xl">
                        {BUYING_PROCESS.howToBuy}
                    </div>
                </div>

                <div className={`${imagesClasses} ${gridStyles.buying__left}`}>
                    <Image src={leftImage} alt="" />
                </div>

                <div
                    className={`${cardsLineClasses} ${gridStyles.buying__cards1}`}
                >
                    {BUYING_PROCESS_CARDS.slice(0, 3).map((item, index) => (
                        <BuyingProcessCard
                            key={index}
                            index={index + 1}
                            card={item}
                        />
                    ))}
                </div>
                <div
                    className={`${cardsLineClasses} ${gridStyles.buying__cards2}`}
                >
                    {BUYING_PROCESS_CARDS.slice(3, 6).map((item, index) => (
                        <BuyingProcessCard
                            key={index}
                            index={index + 4}
                            card={item}
                        />
                    ))}
                </div>
                <div
                    className={`${cardsLineClasses} ${gridStyles.buying__cards3}`}
                >
                    {BUYING_PROCESS_CARDS.slice(
                        6,
                        BUYING_PROCESS_CARDS.length
                    ).map((item, index) => (
                        <BuyingProcessCard
                            key={index}
                            index={index + 6}
                            card={item}
                        />
                    ))}
                </div>

                <div className={`${imagesClasses} ${gridStyles.buying__right}`}>
                    <Image src={rightImage} alt="" />
                </div>

                <div className={gridStyles.buying__btn}>
                    <ArrowButton className="w-full justify-between font-semibold">
                        {COMMON_CONTENT.contactBroker}
                    </ArrowButton>
                </div>
            </div>
        </Block>
    );
}
