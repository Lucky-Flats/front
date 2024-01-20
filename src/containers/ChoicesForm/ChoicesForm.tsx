'use client';
import { CustomCheckbox, CustomSelect, Input, Range } from '@/components';
import { Block } from '@/components/Block';
import { CHOICES, COMMON_CONTENT } from '@/config';
import React, { useEffect, useState } from 'react';

const SOCIALS_SELECT_OPTIONS = [
    {
        label: 'Telegram',
        value: 'telegram',
    },
];

const DECORATION_SELECT_OPTIONS = [
    {
        label: 'Без отделки',
        value: 'without',
    },
];

type TDefaultForm = {
    rooms: number | number[];
    price: number | number[];
    decoration: string;
    social: string;
    phoneNumber: string;
    agreed: boolean;
};

export function ChoicesForm() {
    const [formIsValid, setFormIsValid] = useState(false);
    const [form, setForm] = useState<TDefaultForm>({
        rooms: 1,
        price: 5,
        decoration: '',
        social: '',
        phoneNumber: '',
        agreed: true,
    });

    useEffect(() => {
        const hasEmpty = Object.values(form).filter(item =>
            typeof item === 'string' ? !item.trim() : !item
        );

        setFormIsValid(!hasEmpty.length);
    }, [form]);

    const send = () => {
        if (formIsValid) {
            console.log(form);
        }
    };

    return (
        <Block className="flex flex-col gap-20">
            {CHOICES.title}
            <div className="flex flex-col gap-10 w-full mx-auto max-w-[430px] xl:max-w-none">
                <div className="flex flex-col gap-2.5 xl:grid xl:grid-cols-6 xl:gap-5">
                    <Range
                        min={1}
                        max={5}
                        step={1}
                        onChange={value => setForm({ ...form, rooms: value })}
                        value={form.rooms}
                        title={CHOICES.rooms}
                    />
                    <Range
                        min={5}
                        max={30}
                        step={5}
                        onChange={value => setForm({ ...form, price: value })}
                        value={form.price}
                        title={CHOICES.price}
                    />
                    <CustomSelect
                        options={DECORATION_SELECT_OPTIONS}
                        emptyTitle={COMMON_CONTENT.decoration}
                        onChange={value =>
                            setForm({ ...form, decoration: value.toString() })
                        }
                    />
                    <CustomSelect
                        options={SOCIALS_SELECT_OPTIONS}
                        emptyTitle={COMMON_CONTENT.send}
                        onChange={value =>
                            setForm({ ...form, social: value.toString() })
                        }
                    />
                    <Input
                        placeholder={'Номер телефона'}
                        value={form.phoneNumber}
                        onChange={value =>
                            setForm({
                                ...form,
                                phoneNumber:
                                    typeof value === 'string'
                                        ? value
                                        : value.target.value,
                            })
                        }
                    />
                    <button
                        className="h-[70px] w-full transition-all duration-std bg-green hover:bg-dark rounded-[10px] text-white border-0 outline-0 active:border-0 focus:border-0 focus-visible:border-0
                text-sm font-light leading-1.1 disabled:bg-gray md:text-[7px] xl:text-sm md:h-[35px] xl:h-[70px]"
                        onClick={send}
                        disabled={!formIsValid}
                    >
                        {COMMON_CONTENT.getVariants}
                    </button>
                </div>

                <CustomCheckbox
                    label={COMMON_CONTENT.agreeWithTerms}
                    checked={form.agreed}
                    onChange={checked => setForm({ ...form, agreed: checked })}
                />
            </div>
        </Block>
    );
}
