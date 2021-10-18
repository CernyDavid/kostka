let povoleno = 0
input.onButtonPressed(Button.A, function stisknutoA() {
    
    povoleno = 1
})
let desetsten = 0
input.onButtonPressed(Button.B, function stisknutoB() {
    
    if (desetsten == 0) {
        
        desetsten = 1
    } else {
        desetsten = 0
    }
    
})
let number = 0
input.onGesture(Gesture.Shake, function hod() {
    if (povoleno == 1) {
        
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
        
    }
    
})
basic.forever(function on_forever() {
    
})
