# downgrade [![travis][travis-image]][travis-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url]

[travis-image]: https://img.shields.io/travis/feross/downgrade/master.svg
[travis-url]: https://travis-ci.org/feross/downgrade
[npm-image]: https://img.shields.io/npm/v/downgrade.svg
[npm-url]: https://npmjs.org/package/downgrade
[downloads-image]: https://img.shields.io/npm/dm/downgrade.svg
[downloads-url]: https://npmjs.org/package/downgrade

### Sets the user identity of the process to `www-data`

## install

```
npm install downgrade
```

## usage

To attempt to set the user identity of the process to `www-data` (a good default on most
linux systems):

```js
var downgrade = require('downgrade')

downgrade()
```

Or, to set the user identity to a specific ID:

```js
downgrade('username', 'group')
```

The arguments can be either a numerical ID or a username/group string. If a string is
specified, this method blocks while resolving it to a numerical ID.

If the current user's permissions do not allow the user identity to be changed, this
function will do nothing (no-op).

For best results, start your node process as `root`, run actions that require `root`
privileges, then downgrade the user permissions.

On non-posix platforms (e.g. Windows), this module does nothing.

## license

MIT. Copyright (c) [Feross Aboukhadijeh](http://feross.org).
