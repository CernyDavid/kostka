let povoleno = "false"
input.onButtonPressed(Button.A, function stisknutoA() {
    let povoleno = "true"
})
let number = 0
input.onGesture(Gesture.Shake, function hod() {
    
    number = randint(1, 6)
    if (number == 1) {
        basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    } else if (number == 2) {
        basic.showLeds(`
        . . . . .
        . # . . .
        . . . . .
        . . . # .
        . . . . .
        `)
    } else if (number == 3) {
        basic.showLeds(`
                # . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . #
                `)
    } else if (number == 4) {
        basic.showLeds(`
                    . . . . .
                    . # . # .
                    . . . . .
                    . # . # .
                    . . . . .
                    `)
    } else if (number == 5) {
        basic.showLeds(`
                        . . . . .
                        . # . # .
                        . . # . .
                        . # . # .
                        . . . . .
                        `)
    } else {
        basic.showLeds(`
                        . # . # .
                        . . . . .
                        . # . # .
                        . . . . .
                        . # . # .
                        `)
    }
    
})
basic.forever(function on_forever() {
    
})
