import { logger } from 'core-decorators/logger.decorator';

export class HttpClientService {
    @logger
    async getAsync(url, params) {
        return await fetch(buildUrl(url, params));
    }
}

function buildUrl(url, params) {
    for (const entry of Object.entries(params)) {
        url.searchParams.set(entry[0], entry[1]);
    }

    return url;
}