function debounce(callback, delay, immediate = false) {
    let timeout;

    return function(...args) {
        const context = this;
        const callNow = immediate && !timeout;

        // Clear the timeout if the function is called again within the delay
        clearTimeout(timeout);

        timeout = setTimeout(() => {
            timeout = null; // Reset timeout after the delay

            if (!immediate) {
                callback.apply(context, args);
            }
        }, delay);

        if (callNow) {
            callback.apply(context, args);
        }
    };
}

module.exports = debounce;
