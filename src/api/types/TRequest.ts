import { THttpMethods } from '@/api/types/THttpMethods';

export type TRequest = {
    method: THttpMethods;
    url: string;
    headers?: Record<string, string>;
    data?: FormData | string | null;
};
