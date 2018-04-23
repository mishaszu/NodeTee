const log = require('../log');

module.exports = {
    time: null,
    start: function() {
        log.head('<-- start testing -->');
        this.time = Date.now();
    },
    end: function() {
        log.head(`<-- Finished testing ${(Date.now() - this.time)/1000}-->`);
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
            log.error(`${failed}/${executed} tests failed.`);
            throw `FAILED TO EXECUTE TESTS`;
        } else {
            log.headInfo(`<-- All tests passed ${passed}/${executed}. -->`);
        }
        this.end();
    },
}
