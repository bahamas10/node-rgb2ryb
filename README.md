rgb2ryb
=======

Convert colors in JavaScript from rgb to ryb and back

## *DEPRECATION NOTICE*

The calculations presented here are not accurate, this module has been deprecated
in favor of [ryb2rgb](https://github.com/bahamas10/ryb2rgb) (`npm install ryb2rgb`)

Example
-------

### rgb2ryb

``` js
var rgb2ryb = require('../rgb2ryb'),
console.log(rgb2ryb([0, 255, 0]));
```

yields

``` json
[0, 255, 255]
```

### ryb2rgb

``` js
var rgb2ryb = require('../rgb2ryb'),
console.log(rgb2ryb.ryb2rgb([0, 255, 0]));
```

yields

``` json
[255, 255, 0]
```

### complimentary

``` js
var rgb2ryb = require('../rgb2ryb'),
console.log(rgb2ryb.complimentary([0, 255, 0]));
```

yields

``` json
[255, 0, 255]
```

Functions
---------

These functions are available in Node and in the browser

- `color`: an array of rgb/ryb values.  ie `[0, 255, 255]`

### rgb2ryb(color)

Convert from rgb to ryb

### ryb2rgb(color)

Convert from ryb to rgb

### complimentary(color, [limit])

Easily calculate a colors complimentary, limit defaults to 255

Usage
-----

``` js
var rgb2ryb = require('rgb2ryb');
```

or

``` html
<script src="rgb2ryb.js"></script>
```

Installation
------------

    npm install rgb2ryb

Credits
-------

Original code http://www.insanit.net/computer-programming/red-green-blue-to-red-yellow-blue-part-2/

Ported to JS for node and the browser

License
-------

MIT
