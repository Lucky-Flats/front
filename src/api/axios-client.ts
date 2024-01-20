import { toMultipart } from '@/api/lib/toMultipart';
import { TApiResponse, THttpMethods, TRequest } from '@/api/types';
import axios, { AxiosError } from 'axios';
import { ResponseHandler } from './ResponseHandler';

export class AxiosClient {
    private responseHandler: ResponseHandler;

    apiUrl: string;
    headers: Record<string, string> = { 'Cache-Control': 'no-cache' };

    constructor(apiUrl: string) {
        this.apiUrl = apiUrl;
        this.responseHandler = new ResponseHandler();
    }

    private async fetch(request: TRequest): Promise<TApiResponse> {
        try {
            return this.responseHandler.handleResponse(
                await axios({ ...request, withCredentials: true })
            );
        } catch (e) {
            return this.responseHandler.handleError(e as AxiosError);
        }
    }

    async sendJson(
        method: THttpMethods,
        endpoint: string,
        data: Record<string, unknown>
    ): Promise<TApiResponse> {
        const headers = {
            ...this.headers,
            'Content-Type': 'application/json',
        };

        return this.fetch({
            method,
            url: this.apiUrl + endpoint,
            data: toMultipart(data),
            headers,
        });
    }
}
