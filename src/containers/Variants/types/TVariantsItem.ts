import { StaticImageData } from 'next/image';
import React from 'react';

export type TVariantsItem = {
    image: StaticImageData;
    title: string;
    description: React.ReactNode;
};
