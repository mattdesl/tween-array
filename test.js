var test = require('tape')
var array = require('./')
var Ticker = require('tween-ticker')

test('should tween arrays', function(t) {
    var ticker = Ticker()

    var start = [5, 10]
    var end = [10, 20]

    ticker.push(array(start, end, 1.0))
    ticker.tick(0)
    t.deepEqual(start, [5, 10], 'does not modify until tick')
    ticker.tick(1)
    t.deepEqual(start, [10, 20], 'modifies original array')
    t.deepEqual(end, [10, 20], 'does not modify ending array')

    start = [5, 10]
    end = [-10, 15]
    var tmp = []
    ticker.clear()
    ticker.push(array(tmp, end, { start: start, duration: 1.5 }))
    ticker.tick(1.5)
    t.deepEqual(start, [5, 10], 'specifying target does not modify original')
    t.deepEqual(tmp, [-10, 15], 'changes stored in tmp')
    

    start = [10, 50]
    end = [50, 100]
    var tween = array(start, end, 2)
    tween.on('update', function(ev) {
        t.equal(ev.target, start, 'target is unchanged')
    })
    tween.tick(1)
    t.deepEqual(start, [30, 75], 'straight tickin\'')

    t.end()
})