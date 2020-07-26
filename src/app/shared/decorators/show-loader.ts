export function ShowLoader() {
    // tslint:disable-next-line:ban-types only-arrow-functions
    return function (Class: Function) {
        Object.defineProperty(Class.prototype, 'showLoader', {
            value: true,
        });
    };
}
