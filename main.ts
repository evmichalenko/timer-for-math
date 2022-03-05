input.onButtonPressed(Button.A, function () {
    Start = true
})
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    Start = false
})
let Start = false
let Work = 10
let Rest = 5
basic.forever(function () {
    if (Start == true) {
        while (Work > 0) {
            basic.showNumber(Work)
            Work += -1
            basic.pause(500)
        }
        while (Rest > 0) {
            basic.showNumber(Rest)
            Rest += -1
            basic.pause(500)
        }
        control.reset()
    }
})
