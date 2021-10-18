let povoleno = "false"
input.onButtonPressed(Button.A, function stisknutoA() {
    
    povoleno = "true"
})
let desetsten = "false"
input.onButtonPressed(Button.B, function stisknutoB() {
    if (desetsten == "false") {
        
        desetsten = "true"
    } else {
        
        desetsten = "false"
    }
    
})
let number = 0
input.onGesture(Gesture.Shake, function hod() {
    let index: number;
    if (desetsten == "false") {
        if (povoleno == "true") {
            
            number = randint(1, 6)
            if (number == 1) {
                basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
                music.playTone(330, music.beat(BeatFraction.Whole))
                
                povoleno = "false"
            } else if (number == 2) {
                basic.showLeds(`
                    . . . . .
                    . # . . .
                    . . . . .
                    . . . # .
                    . . . . .
                    `)
                for (index = 0; index < 2; index++) {
                    music.playTone(330, music.beat(BeatFraction.Whole))
                    basic.pause(500)
                }
                
                povoleno = "false"
            } else if (number == 3) {
                basic.showLeds(`
                        # . . . .
                        . . . . .
                        . . # . .
                        . . . . .
                        . . . . #
                        `)
                for (index = 0; index < 3; index++) {
                    music.playTone(330, music.beat(BeatFraction.Whole))
                    basic.pause(500)
                }
                
                povoleno = "false"
            } else if (number == 4) {
                basic.showLeds(`
                            . . . . .
                            . # . # .
                            . . . . .
                            . # . # .
                            . . . . .
                            `)
                for (index = 0; index < 4; index++) {
                    music.playTone(330, music.beat(BeatFraction.Whole))
                    basic.pause(500)
                }
                
                povoleno = "false"
            } else if (number == 5) {
                basic.showLeds(`
                                . . . . .
                                . # . # .
                                . . # . .
                                . # . # .
                                . . . . .
                                `)
                for (index = 0; index < 5; index++) {
                    music.playTone(330, music.beat(BeatFraction.Whole))
                    basic.pause(500)
                }
                
                povoleno = "false"
            } else {
                basic.showLeds(`
                                . # . # .
                                . . . . .
                                . # . # .
                                . . . . .
                                . # . # .
                                `)
                for (index = 0; index < 6; index++) {
                    music.playTone(330, music.beat(BeatFraction.Whole))
                    basic.pause(500)
                }
                
                povoleno = "false"
            }
            
        }
        
    } else if (povoleno == "true") {
        
        number = randint(1, 10)
        if (number == 1) {
            basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . # . .
                    . . . . .
                    . . . . .
                    `)
            music.playTone(330, music.beat(BeatFraction.Whole))
            
            povoleno = "false"
        } else if (number == 2) {
            basic.showLeds(`
                    . . . . .
                    . # . . .
                    . . . . .
                    . . . # .
                    . . . . .
                    `)
            for (index = 0; index < 2; index++) {
                music.playTone(330, music.beat(BeatFraction.Whole))
                basic.pause(500)
            }
            
            povoleno = "false"
        } else if (number == 3) {
            basic.showLeds(`
                        # . . . .
                        . . . . .
                        . . # . .
                        . . . . .
                        . . . . #
                        `)
            for (index = 0; index < 3; index++) {
                music.playTone(330, music.beat(BeatFraction.Whole))
                basic.pause(500)
            }
            
            povoleno = "false"
        } else if (number == 4) {
            basic.showLeds(`
                            . . . . .
                            . # . # .
                            . . . . .
                            . # . # .
                            . . . . .
                            `)
            for (index = 0; index < 4; index++) {
                music.playTone(330, music.beat(BeatFraction.Whole))
                basic.pause(500)
            }
            
            povoleno = "false"
        } else if (number == 5) {
            basic.showLeds(`
                                . . . . .
                                . # . # .
                                . . # . .
                                . # . # .
                                . . . . .
                                `)
            for (index = 0; index < 5; index++) {
                music.playTone(330, music.beat(BeatFraction.Whole))
                basic.pause(500)
            }
            
            povoleno = "false"
        } else if (number == 6) {
            basic.showLeds(`
                                    . # . # .
                                    . . . . .
                                    . # . # .
                                    . . . . .
                                    . # . # .
                                    `)
            for (index = 0; index < 6; index++) {
                music.playTone(330, music.beat(BeatFraction.Whole))
                basic.pause(500)
            }
            
            povoleno = "false"
        } else if (number == 7) {
            basic.showLeds(`
                                        . . # . .
                                        . # . # .
                                        . . # . .
                                        . # . # .
                                        . . # . .
                                        `)
            for (index = 0; index < 7; index++) {
                music.playTone(330, music.beat(BeatFraction.Whole))
                basic.pause(500)
            }
            
            povoleno = "false"
        } else if (number == 8) {
            basic.showLeds(`
                                            . # . # .
                                            . . # . .
                                            . # . # .
                                            . . # . .
                                            . # . # .
                                            `)
            for (index = 0; index < 8; index++) {
                music.playTone(330, music.beat(BeatFraction.Whole))
                basic.pause(500)
            }
            
            povoleno = "false"
        } else if (number == 9) {
            basic.showLeds(`
                                                # . . . #
                                                . # . # .
                                                . . # . .
                                                . # . # .
                                                # . . . #
                                                `)
            for (index = 0; index < 9; index++) {
                music.playTone(330, music.beat(BeatFraction.Whole))
                basic.pause(500)
            }
            
            povoleno = "false"
        } else {
            basic.showLeds(`
                                                # . . . #
                                                . # . # .
                                                # . . . #
                                                . # . # .
                                                # . . . #
                                                `)
            for (index = 0; index < 10; index++) {
                music.playTone(330, music.beat(BeatFraction.Whole))
                basic.pause(500)
            }
            
            povoleno = "false"
        }
        
    }
    
})
basic.forever(function on_forever() {
    
})
