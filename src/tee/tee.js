const { headInfo, error, good, info } = require('../log');
const expect = require('../expect');

module.exports = {
  run() {
    let counter = 0;
    let scc = 0;
    let err = 0;
    let ign = 0;
    let len = this.cases.length;
    headInfo('');
    headInfo(`<--Running ${this.name} tests-->`);
    const focus = this.cases.find(c => c.focus);
    if (focus) {
      info(`Running only 1 test from ${len}`);
      ign = len - 1;
      try {
        focus.fn(expect);
        good(`Pass Succesfully`);
        good(focus.message);
        scc++;
      } catch (e) {
        error(`Throwed error`);
        error(focus.message);
        error(e);
        err++;
      }
      return { scc, err, ign, len };
    }
    this.cases.forEach(c => {
      counter++;
      if (c.ignore) {
        info(`id ${counter}/${len} Ignored`);
        info(c.message);
        ign++;
      } else if (c.shout) {
        good(`id ${counter}/${len} Pass Succesfully`);
        good(c.message);
        scc++;
      } else {
        try {
          c.fn(expect);
          good(`id ${counter}/${len} Pass Succesfully`);
          good(c.message);
          scc++;
        } catch (e) {
          error(`id ${counter}/${len} throwed error`);
          error(c.message);
          error(e);
          err++;
        }
      }
    });
    return { scc, err, ign, len };
  },
  case(message, fn, { focus, ignore, shout } = {}) {
    this.cases.push({
      message,
      fn,
      focus,
      ignore,
      shout,
    });
  },
  new(name) {
    const T = Object.create(this);
    T.name = name;
    T.cases = [];
    return T;
  },
};
