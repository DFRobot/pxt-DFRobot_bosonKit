
input.onButtonPressed(Button.A, function () {
    count = count + 1
    if (count == 1) {
        bosonKit.M011_00184_setIndexColor(1, 0xff0000)
        bosonKit.M011_00184_setIndexColor(2, bosonKit.M011_00184_rgb(33, 132, 29))
        bosonKit.M011_00184_setIndexColor(bosonKit.M011_00184_ledRange(3, 4), 0x0000ff)
        bosonKit.M011_00184_setIndexColor(5, 0xffff00)
    } else if (count == 2) {
        bosonKit.M011_00184_ledRainbow(1, 5, 1, 360)
    } else if (count > 2) {
        count = 0
        bosonKit.M011_00184_off()
    }
})
input.onButtonPressed(Button.B, function () {
    count = 3
})
let count = 0
bosonKit.M011_00184_init(DigitalPin.P0, 5)
bosonKit.heartrate_init(DigitalPin.P1)
bosonKit.M011_00184_brightness(255)
count = 0
basic.forever(function () {
    serial.writeLine("Press the A key: RGB light display (P0)")
    serial.writeLine("Press the B key: RGB light is turned off, obtain the heart rate value")
    serial.writeLine("count:" + count)
    serial.writeLine("analog write P2:")
    bosonKit.bosonAnalogWrite(AnalogPin.P2, 0, BosonSensorAnalogWrite.BosonBrightLightLed)
    serial.writeLine("analog read P3:" + bosonKit.bosonAnalogRead(AnalogPin.P3, BosonSensorAnalogRead.BosonRotation))
    serial.writeLine("digital write P4:")
    bosonKit.bosonDigitalWrite(DigitalPin.P4, 0, BosonSensorDigitalWrite.BosonBrightLightLed)
    serial.writeLine("digital read P5:" + bosonKit.bosonDigitalRead(DigitalPin.P5, BosonSensorDigitalRead.BosonPushButton))
    bosonKit.setServoAngle(AnalogPin.P10, 0)
    if (count == 1) {
        bosonKit.M011_00184_shift(1)
    } else if (count == 2) {
        bosonKit.M011_00184_rotate(1)
    } else if (count == 3) {
        bosonKit.M011_00184_off()
        serial.writeLine("heart rate P1:" + bosonKit.heartrate_read())
    }
    basic.pause(1000)
})
