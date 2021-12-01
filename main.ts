input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showString("Hello!")
})
input.onButtonPressed(Button.A, function () {
    basic.showString("STOP!")
    basic.showLeds(`
        . . . . .
        # # . . .
        # # # . .
        . . # . .
        . . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # # . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("go!")
    basic.showLeds(`
        . . . . .
        . . # . .
        # # # . .
        # # # . .
        . . . . .
        `)
})
