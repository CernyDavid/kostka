def on_forever():
    pass
povoleno = "false"

def stisknutoA():
    global povoleno
    povoleno = "true"
input.on_button_pressed(Button.A, stisknutoA)
desetsten = "false"
def stisknutoB():
    if desetsten == "false":
        global desetsten
        desetsten = "true"
    else:
        global desetsten
        desetsten = "false"
input.on_button_pressed(Button.B, stisknutoB)
number = 0
def hod():
    if desetsten == "false":
        if povoleno == "true":
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
                music.play_tone(330, music.beat(BeatFraction.WHOLE))
                global povoleno
                povoleno = "false"
            else:
                if number == 2:
                    basic.show_leds("""
                    . . . . .
                    . # . . .
                    . . . . .
                    . . . # .
                    . . . . .
                    """)
                    for index in range(2):
                        music.play_tone(330, music.beat(BeatFraction.WHOLE))
                        basic.pause(500)
                    global povoleno
                    povoleno = "false"
                else:
                    if number == 3:
                        basic.show_leds("""
                        # . . . .
                        . . . . .
                        . . # . .
                        . . . . .
                        . . . . #
                        """)
                        for index in range(3):
                            music.play_tone(330, music.beat(BeatFraction.WHOLE))
                            basic.pause(500)
                        global povoleno
                        povoleno = "false"
                    else:
                        if number == 4:
                            basic.show_leds("""
                            . . . . .
                            . # . # .
                            . . . . .
                            . # . # .
                            . . . . .
                            """)
                            for index in range(4):
                                music.play_tone(330, music.beat(BeatFraction.WHOLE))
                                basic.pause(500)
                            global povoleno
                            povoleno = "false"
                        else:
                            if number == 5:
                                basic.show_leds("""
                                . . . . .
                                . # . # .
                                . . # . .
                                . # . # .
                                . . . . .
                                """)
                                for index in range(5):
                                    music.play_tone(330, music.beat(BeatFraction.WHOLE))
                                    basic.pause(500)
                                global povoleno
                                povoleno = "false"
                            else:
                                basic.show_leds("""
                                . # . # .
                                . . . . .
                                . # . # .
                                . . . . .
                                . # . # .
                                """)
                                for index in range(6):
                                    music.play_tone(330, music.beat(BeatFraction.WHOLE))
                                    basic.pause(500)
                                global povoleno
                                povoleno = "false"
    else:
        if povoleno == "true":
            global number
            number = randint(1, 10)
            if number == 1:
                basic.show_leds("""
                    . . . . .
                    . . . . .
                    . . # . .
                    . . . . .
                    . . . . .
                    """)
                music.play_tone(330, music.beat(BeatFraction.WHOLE))
                global povoleno
                povoleno = "false"
            else:
                if number == 2:
                    basic.show_leds("""
                    . . . . .
                    . # . . .
                    . . . . .
                    . . . # .
                    . . . . .
                    """)
                    for index in range(2):
                        music.play_tone(330, music.beat(BeatFraction.WHOLE))
                        basic.pause(500)
                    global povoleno
                    povoleno = "false"
                else:
                    if number == 3:
                        basic.show_leds("""
                        # . . . .
                        . . . . .
                        . . # . .
                        . . . . .
                        . . . . #
                        """)
                        for index in range(3):
                            music.play_tone(330, music.beat(BeatFraction.WHOLE))
                            basic.pause(500)
                        global povoleno
                        povoleno = "false"
                    else:
                        if number == 4:
                            basic.show_leds("""
                            . . . . .
                            . # . # .
                            . . . . .
                            . # . # .
                            . . . . .
                            """)
                            for index in range(4):
                                music.play_tone(330, music.beat(BeatFraction.WHOLE))
                                basic.pause(500)
                            global povoleno
                            povoleno = "false"
                        else:
                            if number == 5:
                                basic.show_leds("""
                                . . . . .
                                . # . # .
                                . . # . .
                                . # . # .
                                . . . . .
                                """)
                                for index in range(5):
                                    music.play_tone(330, music.beat(BeatFraction.WHOLE))
                                    basic.pause(500)
                                global povoleno
                                povoleno = "false"
                            else:
                                if number == 6:
                                    basic.show_leds("""
                                    . # . # .
                                    . . . . .
                                    . # . # .
                                    . . . . .
                                    . # . # .
                                    """)
                                    for index in range(6):
                                        music.play_tone(330, music.beat(BeatFraction.WHOLE))
                                        basic.pause(500)
                                    global povoleno
                                    povoleno = "false"
                                else:
                                    if number == 7:
                                        basic.show_leds("""
                                        . . # . .
                                        . # . # .
                                        . . # . .
                                        . # . # .
                                        . . # . .
                                        """)
                                        for index in range(7):
                                            music.play_tone(330, music.beat(BeatFraction.WHOLE))
                                            basic.pause(500)
                                        global povoleno
                                        povoleno = "false"
                                    else:
                                        if number == 8:
                                            basic.show_leds("""
                                            . # . # .
                                            . . # . .
                                            . # . # .
                                            . . # . .
                                            . # . # .
                                            """)
                                            for index in range(8):
                                                music.play_tone(330, music.beat(BeatFraction.WHOLE))
                                                basic.pause(500)
                                            global povoleno
                                            povoleno = "false"
                                        else:
                                            if number == 9:
                                                basic.show_leds("""
                                                # . . . #
                                                . # . # .
                                                . . # . .
                                                . # . # .
                                                # . . . #
                                                """)
                                                for index in range(9):
                                                    music.play_tone(330, music.beat(BeatFraction.WHOLE))
                                                    basic.pause(500)
                                                global povoleno
                                                povoleno = "false"
                                            else:
                                                basic.show_leds("""
                                                # . . . #
                                                . # . # .
                                                # . . . #
                                                . # . # .
                                                # . . . #
                                                """)
                                                for index in range(10):
                                                    music.play_tone(330, music.beat(BeatFraction.WHOLE))
                                                    basic.pause(500)
                                                global povoleno
                                                povoleno = "false"                                 
                                      
input.on_gesture(Gesture.SHAKE, hod)
basic.forever(on_forever)