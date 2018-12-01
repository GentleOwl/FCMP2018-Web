import { PageCannotBeLessThanOneErrorHandler } from './error-handlers/page-cannot-be-less-than-one-error-handler';
import { DefaultErrorHandler } from "./error-handlers/default-error-handler";

export class ErrorHandlerFactory {
    constructor() {
    }

    getHandler(key) {
        switch (key) {
            case 'pageCannotBeLessThanOne':
                return new PageCannotBeLessThanOneErrorHandler();
            default:
                return new DefaultErrorHandler();
        }
    }
}