import { Block } from '@/components/Block';
import React, { useRef } from 'react';

export function OrderForm() {
    const priceRef = useRef<null | HTMLInputElement>(null);
    const decorationRef = useRef<null | HTMLInputElement>(null);
    const socialRef = useRef<null | HTMLInputElement>(null);
    const phoneNumberRef = useRef<null | HTMLInputElement>(null);
    const agreedRef = useRef<null | HTMLInputElement>(null);

    const sendData = function (evt: any) {
        evt.preventDefault();

        const formValues = {
            priceRef,
            decorationRef,
            socialRef,
            phoneNumberRef,
            agreedRef,
        };

        fetch('/api/forms/order', {
            method: 'POST',
            body: JSON.stringify(formValues),
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
            .then(response => response.json())
            .then(response => {
                alert(response);
            });
    };

    return (
        <Block className="grid md:grid-cols-[1.75fr_1fr] pt-14 gap-20 2xl:pt-[80px] flex justify-between">
            <form onSubmit={sendData}>
                <label htmlFor={'price'}>Стоимость</label>
                <input
                    type={'number'}
                    name={'price'}
                    id={'price'}
                    ref={priceRef}
                    required={true}
                />
                <label htmlFor={'price'}>Отделка</label>
                <input
                    type={'text'}
                    name={'decoration'}
                    id={'decoration'}
                    ref={decorationRef}
                    required={true}
                />
                <label htmlFor={'social'}>Отправить в</label>
                <input
                    type={'text'}
                    name={'social'}
                    id={'social'}
                    ref={socialRef}
                    required={true}
                />
                <label htmlFor={'phone-number'}>Отправить в</label>
                <input
                    type={'tel'}
                    name={'phoneNumber'}
                    id={'phone-number'}
                    ref={phoneNumberRef}
                    required={true}
                />
                <label htmlFor={'agreed'}>
                    <input
                        type={'checkbox'}
                        name={'agreed'}
                        id={'agreed'}
                        value={1}
                    />
                    Согласен на обработку персональных данных
                </label>
                <button type={'submit'}>Отправить</button>
            </form>
        </Block>
    );
}
