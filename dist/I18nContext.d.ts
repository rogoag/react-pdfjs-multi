import React from 'react';
export declare type I18nDataRenderer = {
    zoom?: string;
    originalSize?: string;
    scaleUp?: string;
    scaleDown?: string;
    rotateLeft?: string;
    rotateRight?: string;
    download?: string;
    printLabel?: string;
};
export declare const defaultI18n: I18nDataRenderer;
export declare const I18nContext: React.Context<I18nDataRenderer>;
