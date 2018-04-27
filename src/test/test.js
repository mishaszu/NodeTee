const log = require('../log');

module.exports = {
    executed: 0,
    failed: 0,
    passed: 0,
    module: function(descriptor, callback) {
        log.headModule(`<-- testing module ${descriptor} -->`);
        const reulst = callback();
        this.register.forEach( oneCase => {
            this.executed += oneCase.executed;
            this.failed += oneCase.failed;
            this.passed += oneCase.passed;
        });
    },
    register: [],
    case: function (descriptor, callback) {
        log.info(`<- ${descriptor} ->`);
        const wrapper = Object.assign({}, this.tester, {executed:0, failed:0, passed: 0});
        const result = callback(wrapper);
        this.register.push(wrapper);
    },
    tester: {
        executed: 0,
        failed: 0,
        passed: 0,
        run: function(value, name) {
            return {
                toBe: value2 => {
                    this.executed++;
                    if (value === value2) {
                        log.good('passed');
                        this.passed++;
                    }else {
                        if (name) {
                            log.error(`Failed, expect >${value}< to be >${value2}< in test ${name}`);
                        } else {
                            log.error(`Failed, expect >${value}< to be >${value2}<`);
                        }
                        this.failed++;
                    }
                }
            }
        }
    },
    new: function() {
        return Object.assign({}, this, {executed: 0, failed:0, passed:0, register: []});
    },
};
