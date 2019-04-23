import { ErrorHandlerFactory } from 'error-handling/error-handler-factory';

export class ErrorPopupComponent {
    static instance;

    constructor(){
        if(ErrorPopupComponent.instance){
            return ErrorPopupComponent.instance;
        }
        ErrorPopupComponent.instance = this;

        this.errorHandlerFactory = new ErrorHandlerFactory();

        this.errorPopupEl = document.getElementById('error-popup');
        this.errorPopupBodyEl = document.getElementById('error-popup-body');
        this.errorPopupCloseBtn1El = document.getElementById('error-popup-close-1');
        this.errorPopupCloseBtn2El = document.getElementById('error-popup-close-2');

        this.errorPopupCloseBtn1El.addEventListener('click', this.onCloseClick);
        this.errorPopupCloseBtn2El.addEventListener('click', this.onCloseClick);
    }

    onCloseClick = (event) => {
        this.close();
    };

    show = (error) => {
        const errorHandler = this.errorHandlerFactory.getHandler(error.code);
        const message = errorHandler.getMessage(error);

        this.errorPopupBodyEl.innerText = message;
        this.toggleVisibility(true);
    };

    close = () => {
        this.toggleVisibility(false);
    };

    toggleVisibility = (value) => {
        if (value) {
            this.errorPopupEl.classList.add('d-block')
        } else {
            this.errorPopupEl.classList.remove('d-block')
        }
    };
}