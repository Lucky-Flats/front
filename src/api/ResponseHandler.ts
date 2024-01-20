import { TApiResponse } from './types';
import { AxiosError, AxiosResponse } from 'axios';

export class ResponseHandler {
    // eslint-disable-next-line
    handleResponse(response: any): TApiResponse {
        if (response.status >= 200 && response.status < 300) {
            return { status: response.status, isSuccessful: true };
        }

        return { status: response.status, isSuccessful: true };
    }

    handleError(err: AxiosError): TApiResponse {
        const error = err.response as AxiosResponse;

        return {
            error: error?.data as unknown,
            status: error.status,
            isSuccessful: false,
        };
    }
}
