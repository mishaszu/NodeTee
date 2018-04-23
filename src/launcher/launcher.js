const log = require('../log');

module.exports = {
    time: null,
    start: function() {
        log.head('<-- start testing -->');
        this.time = Date.now();
    },
    end: function() {
        log.head('<-- Finished testing -->');
    },
    modules: [],
    run: function(modules) {
        this.start();
        modules.forEach(module => {
            this.modules.push(module());
        });
        let executed = 0,
            passed = 0,
            failed = 0;
        this.modules.forEach(module => {
            executed += module.executed;
            passed += module.passed;
            failed += module.failed;
        });
        if (failed) {
            throw `${failed}/${executed} tests failed. `;
        } else {
            log.headInfo(`<--- All tests passed ${passed}/${executed}.`);
        }
        this.end();
    },
}
