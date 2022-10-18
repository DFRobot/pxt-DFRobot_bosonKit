
input.onButtonPressed(Button.A, function () {
    count = count + 1
    if (count == 1) {
        BosonKit.M011_00184_setIndexColor(1, 0xff0000)
        BosonKit.M011_00184_setIndexColor(2, BosonKit.M011_00184_rgb(33, 132, 29))
        BosonKit.M011_00184_setIndexColor(BosonKit.M011_00184_ledRange(3, 4), 0x0000ff)
        BosonKit.M011_00184_setIndexColor(5, 0xffff00)
    } else if (count == 2) {
        BosonKit.M011_00184_ledRainbow(1, 5, 1, 360)
    } else if (count > 2) {
        count = 0
        BosonKit.M011_00184_off()
    }
})
input.onButtonPressed(Button.B, function () {
    count = 3
})
let count = 0
BosonKit.M011_00184_init(DigitalPin.P0, 5)
BosonKit.heartrate_init(DigitalPin.P1)
BosonKit.M011_00184_brightness(255)
count = 0
basic.forever(function () {
    serial.writeLine("Press the A key: RGB light display (P0)")
    serial.writeLine("Press the B key: RGB light is turned off, obtain the heart rate value")
    serial.writeLine("count:" + count)
    serial.writeLine("analog write P2:")
    BosonKit.bosonAnalogWrite(AnalogPin.P2, 0, BosonSensorAnalogWrite.BosonBrightLightLed)
    serial.writeLine("analog read P3:" + BosonKit.bosonAnalogRead(AnalogPin.P3, BosonSensorAnalogRead.BosonRotation))
    serial.writeLine("digital write P4:")
    BosonKit.bosonDigitalWrite(DigitalPin.P4, 0, BosonSensorDigitalWrite.BosonBrightLightLed)
    serial.writeLine("digital read P5:" + BosonKit.bosonDigitalRead(DigitalPin.P5, BosonSensorDigitalRead.BosonPushButton))
    BosonKit.setServoAngle(AnalogPin.P10, 0)
    if (count == 1) {
        BosonKit.M011_00184_shift(1)
    } else if (count == 2) {
        BosonKit.M011_00184_rotate(1)
    } else if (count == 3) {
        BosonKit.M011_00184_off()
        serial.writeLine("heart rate P1:" + BosonKit.heartrate_read())
    }
    basic.pause(1000)
})
