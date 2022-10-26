# Boson Kit

[DFRobot Boson Kit is a set of modularized electronic building blocks designed for young inventors and STEM educators.Boson platform has more than 50 different modules, including sensors, actuators, logic gates and more.Boson modules are magnetic. They can stick on a whiteboard, fridge, or other magnetic objects In a snap.Each boson module comes with mounting plates that compatible with Lego blocks and screws.](https://www.dfrobot.com/boson.html)

[Module Document Address](https://wiki.dfrobot.com/Boson_Kit_Product_List)

## Basic usage

* 1.Reads values from rotation encoder and serial prints them.

```blocks

basic.forever(function () {
    serial.writeValue("rotation:", bosonKit.bosonAnalogRead(AnalogPin.P0, BosonSensorAnalogRead.BosonRotation))
})

```
* 2.Reads values from light sensor and serial prints them every second.

```blocks

basic.forever(function () {
    serial.writeValue("light_intensity:", bosonKit.bosonAnalogRead(AnalogPin.P0, BosonSensorAnalogRead.BosonLightIntensity))
    basic.pause(1000)
})

```
* 3.Reads values from steam sensor and serial prints them every second.

```blocks

   basic.forever(function () {
    serial.writeValue("steam:", bosonKit.bosonAnalogRead(AnalogPin.P0, BosonSensorAnalogRead.BosonSteam))
    basic.pause(1000)
})

```
* 4.Reads values from flame sensor and serial prints them every second.

```blocks
basic.forever(function () {
    serial.writeValue("flame:", bosonKit.bosonAnalogRead(AnalogPin.P0, BosonSensorAnalogRead.BosonFlame))
    basic.pause(1000)
})

```
* 5.Reads values from sound sensor and serial prints them every second.

```blocks

  basic.forever(function () {
    serial.writeValue("sound:", bosonKit.bosonAnalogRead(AnalogPin.P0, BosonSensorAnalogRead.BosonSound))
    basic.pause(1000)
})

```
* 6.Reads values from multiple analog sensors simultaneously and serial prints them every second.

```blocks

basic.forever(function () {
    serial.writeValue("grayscale:", bosonKit.bosonAnalogRead(AnalogPin.P0, BosonSensorAnalogRead.BosonGrayscale))
    serial.writeValue("temp:", bosonKit.bosonAnalogRead(AnalogPin.P1, BosonSensorAnalogRead.BosonTemperature))
    serial.writeValue("soil:", bosonKit.bosonAnalogRead(AnalogPin.P2, BosonSensorAnalogRead.BosonSoilMoisture))
    serial.writeValue("humidity:", bosonKit.bosonAnalogRead(AnalogPin.P3, BosonSensorAnalogRead.BosonHumidity))
    basic.pause(1000)
})

```

**The method above is also applicable to other analog sensors.**

* 7.Reads values of button module and serial prints them.

```blocks

 basic.forever(function () {
    serial.writeValue("button", bosonKit.bosonDigitalRead(DigitalPin.P0, BosonSensorDigitalRead.BosonPushButton))
})

```
* 8.Write high level to P1 to drive the fan on P1.

```blocks

basic.forever(function () {
    bosonKit.bosonDigitalWrite(DigitalPin.P1, 1, BosonSensorDigitalWrite.BosoFan)
})

```

* 9.When the button on pin P0 is pressed, the color LED strip on P1 will be lit up, otherwise, it is off.

```blocks

basic.forever(function () {
    if (bosonKit.bosonDigitalRead(DigitalPin.P0, BosonSensorDigitalRead.BosonPushButton) == 1) {
        bosonKit.bosonDigitalWrite(DigitalPin.P1, 1, BosonSensorDigitalWrite.BosonBrightLightLed)
    } else {
        bosonKit.bosonDigitalWrite(DigitalPin.P1, 0, BosonSensorDigitalWrite.BosonBrightLightLed)
    }
})

```
* 10.Write a value to the fan module on P0 port to drive it to spin.

```blocks

basic.forever(function () {
    bosonKit.bosonAnalogWrite(AnalogPin.P0, 429, BosonSensorAnalogWrite.BosonFan)
})

```

* 11.Rotate the knob module on pin P0; when it's rotated to the maximum value, the bright LED module on pin P8 shows the brightest light.

```blocks

basic.forever(function () {
    bosonKit.bosonAnalogWrite(AnalogPin.P8, Math.map(bosonKit.bosonAnalogRead(AnalogPin.P0, BosonSensorAnalogRead.BosonRotation), 0, 1023, 0, 1023), BosonSensorAnalogWrite.BosonBrightLightLed)
})

```

* 12.Read resting heart rate values and serial prints them.

```blocks

bosonKit.heartrate_init(DigitalPin.P0)
basic.forever(function () {
    serial.writeValue("heartrate:", bosonKit.heartrate_read())
})

```

* 13.Initialize RGB LED strip, and set it as lighting up 7 LEDs and turning off them all after 5s.

```blocks

bosonKit.m01100184Init(DigitalPin.P0, 7)
bosonKit.m01100184ShowColor(0xff0000)
basic.pause(5000)
bosonKit.m01100184Off()

```

* 14.After initializing RGB LED strip, let the 1st and 2nd LEDs show red light, the 3rd and 4th LEDs show green light, and the 5th, 6th and 7th LEDs show blue light.

```blocks

bosonKit.m01100184Init(DigitalPin.P0, 7)
basic.forever(function () {
    bosonKit.m01100184SetIndexColor(bosonKit.m01100184LedRange(1, 2), 0xff0000)
    bosonKit.m01100184SetIndexColor(bosonKit.m01100184LedRange(3, 4), 0x00ff00)
    bosonKit.m01100184SetIndexColor(bosonKit.m01100184LedRange(5, 7), 0x0000ff)
})

```

* 15.Set brightness of RGB LED to 50.

```blocks

bosonKit.m01100184Init(DigitalPin.P0, 7)
bosonKit.m01100184Brightness(50)
basic.forever(function () {
    bosonKit.m01100184ShowColor(0xff0000)
})

```

* 16.Initialize servo angle to 0 degrees, then let servo rotate to the position of 90 degrees.

```blocks

bosonKit.setServoAngle(AnalogPin.P0, 0)
basic.forever(function () {
    bosonKit.setServoAngle(AnalogPin.P0, 90)
})

```

## License

MIT

Copyright (c) 2020, microbit/micropython Chinese community  

## Supported targets

* for PXT/microbit


```package
bosonKit=github:DFRobot/pxt-DFRobot_Boson_Kit
```


