let testNumber = 0
input.onButtonPressed(Button.A, function () {
    testNumber = testNumber + 1
    if (testNumber > 6) {
        testNumber = 0
    }
    if (testNumber == 5 || testNumber == 6) {
        BosonKit.M011_00184_init(DigitalPin.P0, 5)
    }
})
basic.forever(function () {
    serial.writeLine("Number of the current test group:" + testNumber)
    if (testNumber == 0) {
        serial.writeLine("test0_P0:" + BosonKit.rotationSensor(AnalogPin.P0))
        serial.writeLine("test0_P1:" + BosonKit.lightIntensity(AnalogPin.P1))
        serial.writeLine("test0_P2:" + BosonKit.steamSensor(AnalogPin.P2))
        serial.writeLine("test0_P3:" + BosonKit.flameSensor(AnalogPin.P3))
        serial.writeLine("test0_P4:" + BosonKit.soundSensor(AnalogPin.P4))
        serial.writeLine("test0_P10:" + BosonKit.grayscaleSensor(AnalogPin.P10))
    } else if (testNumber == 1) {
        serial.writeLine("test1_P0:" + BosonKit.temperatureSenor(AnalogPin.P0))
        serial.writeLine("test1_P1:" + BosonKit.soilMoistureSenor(AnalogPin.P1))
        serial.writeLine("test1_P2:" + BosonKit.humiditySensor(AnalogPin.P2))
        serial.writeLine("test1_P3:" + BosonKit.waterproofTemperatureSenor(AnalogPin.P3))
        serial.writeLine("test1_P4:" + BosonKit.ultrasonicDistanceSensor(AnalogPin.P4))
        serial.writeLine("test1_P10:" + BosonKit.humiditySht30(AnalogPin.P10))
    } else if (testNumber == 2) {
        serial.writeLine("test2_P0:" + BosonKit.PhV2Senor(AnalogPin.P0))
        serial.writeLine("test2_P1:" + BosonKit.pushButton(DigitalPin.P1))
        serial.writeLine("test2_P2:" + BosonKit.selfLockingSwitch(DigitalPin.P2))
        serial.writeLine("test2_P3:" + BosonKit.tiltSensor(DigitalPin.P3))
        serial.writeLine("test2_P4:" + BosonKit.touchSensor(DigitalPin.P4))
        serial.writeLine("test2_P5:" + BosonKit.conductivitySensor(DigitalPin.P5))
        serial.writeLine("test3_P6:" + BosonKit.motionSensor(DigitalPin.P6))
        BosonKit.heartrate_init(DigitalPin.P7)
        serial.writeLine("test3_P7:" + BosonKit.heartrate_read())
    } else if (testNumber == 3) {
        BosonKit.brightLightLed_analogWrite(AnalogPin.P0, 0)
        BosonKit.ledModule_analogWrite(AnalogPin.P1, 0)
        BosonKit.rgbLedStrip_analogWrite(AnalogPin.P2, 0)
        BosonKit.buzzerModule_analogWrite(AnalogPin.P3, 0)
        BosonKit.fanModule_analogWrite(AnalogPin.P4, 0)
        BosonKit.motorControlModule_analogWrite(AnalogPin.P10, 0)
    } else if (testNumber == 4) {
        BosonKit.servo_analogWrite(AnalogPin.P0, 0)
        BosonKit.brightLightLed_digitalWrite(DigitalPin.P1, 0)
        BosonKit.setServoAngle(AnalogPin.P2, 0)
        BosonKit.ledModule_digitalWrite(DigitalPin.P3, 0)
        BosonKit.RgbLedStrip_digitalWrite(DigitalPin.P4, 0)
        BosonKit.buzzerModule_digitalWrite(DigitalPin.P5, 0)
        BosonKit.fanModule_digitalWrite(DigitalPin.P6, 0)
        BosonKit.voiceRecorder_digitalWrite(DigitalPin.P7, 0)
        BosonKit.servo_digitalWrite(DigitalPin.P8, 0)
    } else if (testNumber == 5) {
        BosonKit.M011_00184_brightness(255)
        BosonKit.M011_00184_showColor(0x00ffff)
        BosonKit.M011_00184_setIndexColor(1, BosonKit.M011_00184_rgb(255, 0, 0))
        BosonKit.M011_00184_setIndexColor(BosonKit.M011_00184_ledRange(2, 3), 0xff8000)
        for (let index = 0; index <= 4; index++) {
            BosonKit.M011_00184_shift(1)
            basic.pause(500)
        }
        BosonKit.M011_00184_off()
    } else if (testNumber == 6) {
        BosonKit.M011_00184_brightness(255)
        BosonKit.M011_00184_ledRainbow(1, 5, 1, 360)
        for (let index = 0; index <= 4; index++) {
            BosonKit.M011_00184_rotate(1)
            basic.pause(500)
        }
        BosonKit.M011_00184_off()
    }
    basic.pause(1000)
})

