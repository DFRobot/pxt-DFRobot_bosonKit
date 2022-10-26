
input.onButtonPressed(Button.A, function () {
    count = count + 1
    if (count == 1) {
        bosonKit.m01100184SetIndexColor(1, 0xff0000)
        bosonKit.m01100184SetIndexColor(2, bosonKit.m01100184Rgb(33, 132, 29))
        bosonKit.m01100184SetIndexColor(bosonKit.m01100184LedRange(3, 4), 0x0000ff)
        bosonKit.m01100184SetIndexColor(5, 0xffff00)
    } else if (count == 2) {
        bosonKit.m01100184LedRainbow(1, 5, 1, 360)
    } else if (count > 2) {
        count = 0
        bosonKit.m01100184Off()
    }
})
input.onButtonPressed(Button.B, function () {
    count = 3
})
let count = 0
bosonKit.m01100184Init(DigitalPin.P0, 5)
bosonKit.heartrateInit(DigitalPin.P1)
bosonKit.m01100184Brightness(255)
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
        bosonKit.m01100184Shift(1)
    } else if (count == 2) {
        bosonKit.m01100184Rotate(1)
    } else if (count == 3) {
        bosonKit.m01100184Off()
        serial.writeLine("heart rate P1:" + bosonKit.heartrateRead())
    }
    basic.pause(1000)
})
