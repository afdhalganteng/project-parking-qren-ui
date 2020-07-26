export function HideLoader(triggerAction: string) {
    // tslint:disable-next-line:ban-types only-arrow-functions
    return function (Class: Function) {
        Object.defineProperty(Class.prototype, 'triggerAction', {
            value: triggerAction,
        });
    };
}
