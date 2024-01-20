'use client';
import { Block } from '@/components/Block';
import { MAIN_CONTENT } from '@/config';
import Image from 'next/image';
import React from 'react';
import orderCarImage from '@/assets/img/orderCarImage.png';

export function OrderCarForm() {
    const form = `
  <html lang="ru">
    <body>
<script id="myScript">!function(a,m,o,c,r,m){a[o+c]=a[o+c]||{setMeta:function(p){this.params=(this.params||[]).concat([p])}},a[o+r]=a[o+r]||function(f){a[o+r].f=(a[o+r].f||[]).concat([f])},a[o+r]({id:"1258566",hash:"66604bc9ea4ecc08cc7b035ecea99d54",locale:"ru"}),a[o+m]=a[o+m]||function(f,k){a[o+m].f=(a[o+m].f||[]).concat([[f,k]])}}(window,0,"amo_forms_","params","load","loaded");</script>
<script id="amoforms_script_1258566" async="async" charset="utf-8" src="https://forms.amocrm.ru/forms/assets/js/amoforms.js?1703726467"></script>
    </body>
  </html>
`;

    return (
        <Block className="relative pt-20 2xl:pt-40">
            <div className="relative min-h-[580px] rounded-[50px] py-6 px-5 md:py-6 md:px-16 md:min-h-[460px] 2xl:py-11 2xl:pl-36 2xl:pr-[131px] 2xl:min-h-[580px]">
                <div className="relative z-10 flex flex-col gap-6 leading-1.1 text-white font-light md:gap-4 2xl:gap-8">
                    <div className="text-[24px] 2xl:max-w-[526px] [&>span]:font-semibold md: 2xl:max-w-[1053px] 2xl:text-[42px]">
                        {MAIN_CONTENT.orderCar.title}
                    </div>
                    <div className="text-sm md:max-w-[440px] md:text-[10px] 2xl:max-w-[880px] 2xl:text-xl">
                        {MAIN_CONTENT.orderCar.description}
                    </div>
                    <div className="flex flex-col gap-2.5 mt-4 md:mt-0">
                        <div
                            className="relative max-w-[375px] [&>iframe]:!m-0"
                            dangerouslySetInnerHTML={{ __html: form }}
                        />
                        <div className="text-[7px] flex justify-between gap-4 2xl:text-sm">
                            <div>{MAIN_CONTENT.orderCar.ready}</div>
                            <div className="hidden md:block">
                                {MAIN_CONTENT.orderCar.service}
                            </div>
                        </div>
                    </div>
                </div>
                <Image
                    src={orderCarImage}
                    alt=""
                    fill
                    objectFit="cover"
                    className="rounded-[50px]"
                />
                <div className="bg-car-gradient absolute inset-0 rounded-[50px]" />
            </div>
        </Block>
    );
}
