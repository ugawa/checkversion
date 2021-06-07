let VERSION = 4
for (let index = 0; index < 1000; index++) {
    VERSION = Math.sqrt(VERSION)
}
VERSION = input.runningTimeMicros()
basic.showNumber(VERSION)
if (VERSION > 250000) {
    VERSION = 1
} else {
    VERSION = 2
}
basic.showNumber(VERSION)
basic.forever(function () {
	
})
