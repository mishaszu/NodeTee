const { head, good, error, info, headInfo } = require('../log');
module.exports = {
  register([...tests]) {
    tests.forEach(t => this.tests.push(t));
  },
  run() {
    let scc = 0;
    let err = 0;
    let ign = 0;
    let len = 0;
    head(`<<----Running tests for ${this.name}---->>`);
    head('');
    this.tests.forEach(t => {
      const res = t.run();
      scc += res.scc;
      err += res.err;
      ign += res.ign;
      len += res.len;
    });
    headInfo('');
    headInfo('');
    headInfo('');
    headInfo('Sum up');
    good(`${scc}/${len} Passed`);
    error(`${err}/${len} Errored`);
    info(`${ign}/${len} ignored`);
    if (err.length) {
      throw Error('Not all tests passed');
    }
    return { scc, err, ign, len };
  },
  new(name) {
    const L = Object.create(this);
    L.name = name;
    L.tests = [];
    return L;
  },
};
