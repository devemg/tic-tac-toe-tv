declare const tizen: any;
declare const APP_VERSION: string;

export const getAppVersion = () => {
    if (typeof tizen !== "undefined" && tizen.application) {
        return tizen.application.getCurrentApplication().appInfo.version;
    }
    
    return APP_VERSION ?? '0.0.0';
}

export const closeApp = () => {
    if (typeof tizen !== "undefined" && tizen.application) {
        tizen.application.getCurrentApplication().exit();
    } else {
        throw Error('Tizen is not defined');
    }
}