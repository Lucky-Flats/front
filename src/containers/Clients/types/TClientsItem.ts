import { StaticImageData } from 'next/image';
import React from 'react';

export type TClientsItem = {
    image: StaticImageData;
    photo: StaticImageData;
    name: string;
    shortComment: React.ReactNode;
    fullComment: React.ReactNode;
};
