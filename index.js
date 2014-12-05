var BaseTween = require('tween-base')
var lerp = require('lerp-array')
var inherits = require('inherits')

function ArrayTween(target, end, opt) {
    if (!(this instanceof ArrayTween))
        return new ArrayTween(target, end, opt)

    if (typeof opt === 'number')
        opt = { duration: opt }
    
    BaseTween.call(this, opt)
    this.target = target
    this.start = (opt && opt.start) || this.target
    this.end = end
}

inherits(ArrayTween, BaseTween)

ArrayTween.prototype.ready = function() {
    if (this.target === this.start)
        this.start = this.target.slice()
}

ArrayTween.prototype.lerp = function(alpha) {
    lerp(this.start, this.end, alpha, this.target)
}

module.exports = ArrayTween