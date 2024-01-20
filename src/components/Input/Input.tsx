import React, { ChangeEvent } from 'react';

type TInputProps = React.ComponentPropsWithRef<'input'> & {
    onChange: (value: string) => void;
    onBlur?: (value: string) => void;
    onFocus?: (value: string) => void;
    error?: boolean;
};

export function Input({ onChange, ...props }: TInputProps) {
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <div>
            <input
                {...props}
                onChange={e => onChangeHandler(e)}
                className="h-[70px] w-full px-2.5 bg-gray rounded-[10px] border-0 outline-0 active:border-0 focus:border-0 focus-visible:border-0
                text-sm font-light leading-1.1 md:text-[7px] xl:text-sm md:h-[35px] xl:h-[70px] xl:px-11"
            />
        </div>
    );
}
