import { MapListItem } from '@/containers/Map/components/MapListItem';
import { MAP_LIST } from '@/containers/Map/config/map.config';
import React from 'react';

export function MapList() {
    return (
        <div className="grid grid-flow-row">
            {MAP_LIST.map((item, index) => (
                <MapListItem
                    key={index}
                    title={item.title}
                    description={item.description}
                />
            ))}
        </div>
    );
}
