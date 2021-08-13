# vite-web3-react-reproduction

This repository reproduces an error with a Vite production build.

In dev mode, clicking the button works, while in a production build, we get:

```
ReferenceError: require is not defined
    at index.6c14cda2.js:11138
(anonymous) @ index.c33bfdc9.js:20
(anonymous) @ vendor.912106e6.js:9945
Promise.then (async)
_catch @ vendor.912106e6.js:9760
(anonymous) @ vendor.912106e6.js:9917
onClick @ index.c33bfdc9.js:20
Rb @ vendor.912106e6.js:3145
Xb @ vendor.912106e6.js:3157
Yb @ vendor.912106e6.js:3160
Ze @ vendor.912106e6.js:4104
se @ vendor.912106e6.js:4131
(anonymous) @ vendor.912106e6.js:4436
Jb @ vendor.912106e6.js:8471
Nb @ vendor.912106e6.js:3092
jd @ vendor.912106e6.js:4214
yc @ vendor.912106e6.js:3738
hd @ vendor.912106e6.js:3697
exports.unstable_runWithPriority @ vendor.912106e6.js:2383
gg @ vendor.912106e6.js:4657
Hb @ vendor.912106e6.js:8459
gd @ vendor.912106e6.js:3683
```

Minification is disabled to assist with debugging the production build. The same error is presented if minification is enabled.
