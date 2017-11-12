const setIntervalSerial = (callback, interval, runImmediately = false) => {
    let isRunning = runImmediately;
    runImmediately && setTimeout(async () => {
        runImmediately && await callback();
        isRunning = false;
    }, 1);
    return setInterval(async () => {
        if (isRunning) {
            return;
        }
        isRunning = true;
        await callback();
        isRunning = false;
    }, interval);
};

module.exports = setIntervalSerial;
