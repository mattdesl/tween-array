# tween-array

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

A tween object for [tweenr](https://nodei.co/npm/tweenr/) which interpolates single-dimensional arrays. 

```js
var ticker = require('tween-ticker')()
var array = require('tween-array')

var start = [0, 0],
    end = [10, 4]

//push a tween object onto the stack
ticker.push( array(start, end, { duration: 1, delay: 1 }) )

//step the ticker
ticker.tick(0.5)

console.log(start) // -> [5, 2]
```

## memory optimization

This is generally faster than object tweening and leads to less garbage. If you specify a `start` parameter you can avoid creating any garbage, aside from the tween itself.

```js
var start = [50, 50], end = [100, 100], tmp = [0, 0]
var tween = array(tmp, end, { duration: 3, start: start })
tween.tick(3)

console.log(start) // -> [50, 50]
console.log(tmp)   // -> [100, 100]
```

## Usage

[![NPM](https://nodei.co/npm/tween-array.png)](https://nodei.co/npm/tween-array/)

#### `tween = array(target, end[, opt])`

Creates a new array tween that can be ticked by tween-ticker or your engine of choice. This will tween the `target` array to `end`. Options are the same as `ticker.to()`, additionally:

- `start` can be an array to use as the start values

If `opt` is a number, it is assumed to be a duration.

```js
//equivalent
array(start, end, { duration: 1 })
array(start, end, 1)
```

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/tween-array/blob/master/LICENSE.md) for details.
