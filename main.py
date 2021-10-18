def on_forever():
    pass
povoleno = 0
def stisknutoA():
    global povoleno
    povoleno = 1
input.on_button_pressed(Button.A, stisknutoA)
desetsten = 0
def stisknutoB():
    global desetsten
    if desetsten == 0:
        global desetsten
        desetsten = 1
    else:
        desetsten = 0
input.on_button_pressed(Button.B, stisknutoB)
number = 0
def hod():
    if povoleno == 1:
        global number
        number = randint(1, 6)
        if number == 1:
            basic.show_leds("""
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            """)
        else:
            if number == 2:
                basic.show_leds("""
            . . . . .
            . # . . .
            . . . . .
            . . . # .
            . . . . .
            """)
            else:
                if number == 3:
                    basic.show_leds("""
                    # . . . .
                    . . . . .
                    . . # . .
                    . . . . .
                    . . . . #
                    """)
                else:
                    if number == 4:
                        basic.show_leds("""
                        . . . . .
                        . # . # .
                        . . . . .
                        . # . # .
                        . . . . .
                        """)
                    else:
                        if number == 5:
                            basic.show_leds("""
                            . . . . .
                            . # . # .
                            . . # . .
                            . # . # .
                            . . . . .
                            """)
                        else:
                            basic.show_leds("""
                            . # . # .
                            . . . . .
                            . # . # .
                            . . . . .
                            . # . # .
                            """)

input.on_gesture(Gesture.SHAKE, hod)
basic.forever(on_forever)

