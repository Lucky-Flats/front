import { StaticImageData } from 'next/image';

export type TPopularObjectItem = {
    name: string;
    description: string;
    date: string;
    image: StaticImageData;
};
