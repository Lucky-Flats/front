import { CONTENT } from '@/config';
import React from 'react';
import { ArrowButton, DownloadButton } from '@/components';

export default function UiKitPage() {
    return (
        <div className="flex flex-col gap-3 items-start">
            <ArrowButton>{CONTENT.contactBroker}</ArrowButton>
            <DownloadButton link={''}>{CONTENT.downloadCatalog}</DownloadButton>
        </div>
    );
}
