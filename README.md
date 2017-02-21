# Test [`system.global`](https://github.com/ljharb/System.global)/[`array.from`](https://github.com/mathiasbynens/Array.from/) in Karma PhantomJS

```
npm run karma
// or
npm run karma-start
```


```
npm run karma

> system-global-phantomjs-test@1.0.0 karma C:\Users\MLM\Libraries\Code\javascript\system-global-phantomjs-test
> karma start karma.config.js --single-run

(node:16968) DeprecationWarning: loaderUtils.parseQuery() received a non-string value which can be problematic, see https://github.com/webpack/loader-utils/issues/56
parseQuery() will be replaced with getOptions() in the next major version of loader-utils.
21 02 2017 01:20:56.576:INFO [karma]: Karma v1.5.0 server started at http://0.0.0.0:9876/
21 02 2017 01:20:56.578:INFO [launcher]: Launching browser PhantomJS with unlimited concurrency
21 02 2017 01:20:56.624:INFO [launcher]: Starting browser PhantomJS
21 02 2017 01:20:59.527:INFO [PhantomJS 2.1.1 (Windows 8 0.0.0)]: Connected on socket A_2Jk42DEvtvVrOYAAAA with id 14696421
PhantomJS 2.1.1 (Windows 8 0.0.0) ERROR
  SyntaxError: Unexpected token '.'
  at webpack:///~/array.from/~/system.global/shim.js:22:0 <- src/entry2.js:9629
```

See `npm-shrinkwrap.json` for current versions that threw the errors.


## `entry1.js`

Uses `system.global` directly but runs correctly. Comment out `entry2` to see it run without issues.

## `entry2.js`

Uses `array.from` which depends on `system.global` and throws the error in question.

```
SyntaxError: Unexpected token '.'
at webpack:///~/array.from/~/system.global/shim.js:22:0 <- src/entry2.js:9629
```
