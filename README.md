# NodeTee
Repo in development

##Instruction

1. Define function with module:
```
const {Test} = require('node-tee');
function Module1() {
    const test = Test.new();
    test.module('Testing important thing', function() {
        test.case('adding element', function(x) {
            x.run(true).toBe(true);
        });
    });

    return test;
}
```

2. Running all modules from launcher:
```
const {Launcher} = require('node-tee');
Launcher.run(Module1);
```
