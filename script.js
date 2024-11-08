function debounce(callback, delay, immediate = false) {
  let timeoutId;

  return function(...args) {
    const context = this;

    const callNow = immediate && !timeoutId;

    clearTimeout(timeoutId);

    if (callNow) {
      callback.apply(context, args);
      timeoutId = setTimeout(() => {
        timeoutId = null;
      }, delay);
    } else {
      timeoutId = setTimeout(() => {
        callback.apply(context, args);
      }, delay);
    }
  };
}

module.exports = debounce;
