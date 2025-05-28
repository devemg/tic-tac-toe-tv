
// backEvent.js
export class BackManager {
    private customHandler: any = null;
    private defaultHandler: any = null;
    private eventName: string = '';

    /**
     * Start to listen the back custom event and save the default handler to execute
     *
     * @param eventName 
     * @param handler 
     */
    init = (eventName: string, handler: () => void) => {
        document.addEventListener(eventName, this.trigger);
        this.defaultHandler = handler;
        this.eventName = eventName;
    }

    /**
     * Stop to listen the back custom event and remove the handlers references
     */
    close = () => {
        document.removeEventListener(this.eventName, this.trigger);
        this.eventName = '';
        this.customHandler = null;
        this.defaultHandler = null;
    }

    /**
     * Set the custom handler that will be executed instead of the default handler
     *
     * @param handler 
     */
    setCustomHandler = (handler: () => void) => {
        this.customHandler = handler;
    }

    /**
     * Remove the custom handler reference
     */
    clearCustomHandler = () => {
        this.customHandler = null;
    }

    /**
     * Function that will be executed on the event detection
     *
     */
    private trigger = () => {
        if (this.customHandler) {
            this.customHandler();
        } else if (this.defaultHandler) {
            this.defaultHandler();
        }
    }
}