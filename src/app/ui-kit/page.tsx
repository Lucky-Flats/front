'use client';
import { CustomSelect } from '@/components/Select/Select';
import { COMMON_CONTENT, CONTENT } from '@/config';
import React, { useState } from 'react';
import {
    ArrowButton,
    CustomCheckbox,
    DownloadButton,
    Range,
} from '@/components';

const SELECT_OPTIONS = [
    {
        label: 'Telegram',
        value: 'telegram',
    },
];

export default function UiKitPage() {
    const [currentValue, setCurrentValue] = useState<number | number[]>(0);

    return (
        <div className="flex flex-col gap-3 items-start">
            <ArrowButton>{CONTENT.contactBroker}</ArrowButton>
            <DownloadButton link={''}>{CONTENT.downloadCatalog}</DownloadButton>
            <div className="max-w-[240px] w-full px-5">
                <Range
                    min={1}
                    max={10}
                    step={1}
                    onChange={value => setCurrentValue(value)}
                    value={currentValue}
                    title={'комнат'}
                />
            </div>

            <div className="max-w-[240px] w-full px-5">
                <CustomSelect
                    emptyTitle={COMMON_CONTENT.send}
                    options={SELECT_OPTIONS}
                    onChange={value => console.log(value)}
                />
            </div>

            <div className=" w-full px-5">
                <CustomCheckbox
                    label={
                        'Нажимая кнопку «Получить варианты», вы соглашаетесь с политикой конфиденциальности сайта'
                    }
                    onChange={checked => console.log(checked)}
                />
            </div>
        </div>
    );
}
