import { Footer } from '@/components';
import { ChoicesForm } from '@/containers/ChoicesForm/ChoicesForm';
import { MainScreen } from '@/containers/MainScreen/MainScreen';
import { OrderCarForm } from '@/containers/OrderCarForm/OrderCarForm';
import { About, ContactTelegram, Investments } from '@/containers';
import { BuyingProcess } from '@/containers/BuyingProcess/BuyingProcess';
import { Clients } from '@/containers/Clients/Clients';
import { MapComponent } from '@/containers/Map/Map';
import { PopularObjects } from '@/containers/PopularObjects/PopularObjects';
import { Variants } from '@/containers/Variants/Variants';
import React from 'react';

export default function MainPage() {
    return (
        <>
            <main>
                <MainScreen />
                <PopularObjects />
                <BuyingProcess />
                <About />
                <MapComponent />
                <Variants />
                <Clients />
                <OrderCarForm />
                <Investments />
                <ChoicesForm />
                <ContactTelegram />
            </main>
            <Footer />
        </>
    );
}
