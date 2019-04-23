export class ErrorPopupService {
    static showError(error) {
        // TODO: Find optimal way to load component.
        this.loadErrorPopupAsync().then(ErrorPopupComponent => {
            const errorPopupComponent = new ErrorPopupComponent();

            errorPopupComponent.show(error);
        });
    }

    static async loadErrorPopupAsync() {
        const { ErrorPopupComponent } = await import('error-handling/error-popup.component/error-popup.component.js');
        const { default: ErrorPopupComponentHtml } = await import('error-handling/error-popup.component/error-popup.component.html');

        document.body.innerHTML = ErrorPopupComponentHtml + document.body.innerHTML;

        return ErrorPopupComponent;
    }
}