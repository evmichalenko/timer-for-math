input.onButtonPressed(Button.A, function () {
    SetUp = true
    StartScreenMessage = false
    basic.showNumber(_of_Tabatas)
})
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    Start = true
    StartScreenMessage = false
})
input.onGesture(Gesture.Shake, function () {
    if (SetUp == true) {
        basic.showNumber(_of_Tabatas)
        _of_Tabatas += 1
    }
})
let Start = false
let SetUp = false
let _of_Tabatas = 0
let StartScreenMessage = false
StartScreenMessage = true
_of_Tabatas = 1
let Work = 10
let Rest = 5
while (StartScreenMessage == true) {
    basic.showString("A for Setup B to start")
}
basic.forever(function () {
    if (Start == true) {
        for (let index = 0; index < _of_Tabatas; index++) {
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
            Work = 10
            Rest = 5
        }
        control.reset()
    }
})
