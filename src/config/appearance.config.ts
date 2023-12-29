import { ResponsiveType } from 'react-multi-carousel';

export const ENDPOINTS = {
    '3xl': {
        min: 1920,
    },
    xxl: {
        min: 1680,
    },
    xl: {
        max: 1679,
        min: 1400,
    },
    lg: {
        max: 1399,
        min: 1200,
    },
    md: {
        max: 1199,
        min: 960,
    },
    smMd: {
        max: 959,
        min: 768,
    },
    sm: {
        max: 767,
        min: 576,
    },
    xsMd: {
        max: 575,
        min: 516,
    },
    xsSm: {
        max: 515,
        min: 465,
    },
    xs: {
        max: 464,
        min: 406,
    },
    xxsMd: {
        max: 405,
        min: 365,
    },
    xxs: {
        max: 364,
        min: 0,
    },
};

export const SLIDER_RESPONSIVE: ResponsiveType = {
    xxl: {
        breakpoint: { max: 6000, min: ENDPOINTS.smMd.min },
        items: 3,
        partialVisibilityGutter: 30,
    },
    sm: {
        breakpoint: { max: ENDPOINTS.sm.max, min: ENDPOINTS.xxs.min },
        items: 1,
    },
};

export const ONE_SLIDE_SLIDER_RESPONSIVE: ResponsiveType = {
    md: {
        breakpoint: { max: 6000, min: ENDPOINTS.xxs.min },
        items: 1,
    },
};
