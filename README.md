# set-interval-serial
Wrapper for setInterval function to prevent overlapping execution

Extends `setInterval` and prevents the same function to start unless its previous execution is completed. Useful when 
running async tasks that can take time, but cannot run in parallel. 

```js
const setIntervalSerial = require('set-interval-serial');
const setTimeoutPromise = require('util').promisify(setTimeout);

const asyncFunction = async () => {
    await setTimeoutPromise(1000);
    console.log('Executing...');
};

// the output will appear every second, although the interval is set to 50ms
setIntervalSerial(asyncFunction, 50);
```