let tengo_agua = 0
let no_melestes = 0
let estoy_enferma = 0
let no_tengo_sol_ni_agua = 0
let esta_lloviendo = 0
function feliz () {
    basic.showLeds(`
        . . . . .
        . # . # .
        # . . . #
        . # # # .
        . . . . .
        `)
    tengo_agua = 0
}
function enojado () {
    basic.showLeds(`
        . . . . .
        # # . # #
        . # . # .
        # # # # #
        . . . . .
        `)
    no_melestes = 0
}
function sonrojado () {
    basic.showLeds(`
        . # . # .
        . # . # .
        # . # . #
        . # # # .
        . . . . .
        `)
    estoy_enferma = 1
}
function sed_y_hambre () {
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        . # # # .
        . . # . .
        `)
    no_tengo_sol_ni_agua = 1
}
function triste () {
    basic.showLeds(`
        . # . # .
        . # . # .
        # # # # #
        # . . . #
        . . . . .
        `)
    esta_lloviendo = 1
}
