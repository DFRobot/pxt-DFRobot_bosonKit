
basic.forever(function () {
    if (BosonKit.bos0003_rotation(DigitalPin.P0) == 1) {
        BosonKit.bos0024_rotation(AnalogPin.P8, 1000)
    } else {
        BosonKit.bos0024_rotation(AnalogPin.P8, 0)
    }
})
