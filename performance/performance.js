const perf_hooks = require('perf_hooks');

test = perf_hooks.performance.timerify(test);

const performanceObserver = new perf_hooks.PerformanceObserver((items, observer) => {
    console.log(items.getEntries());
    const entry = items.getEntriesByName('slow').pop();
    console.log(`${entry.name}: ${entry.duration}`);
    observer.disconnect();
});

performanceObserver.observe({entryTypes: ['measure', 'function']});

function test() {    
    const array = [];
    for (let i=0; i < 100000000; i++) {
        array.push(i*i);
    }    
};

function slow() {
    performance.mark('start');
    const array = [];
    for (let i=0; i < 100000000; i++) {
        array.push(i*i);
    }
    performance.mark('end');
    performance.measure('slow', 'start', 'end');    
};

slow();
test();