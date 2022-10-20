# Boson Kit

[DFRobot Boson Kit is a set of modularized electronic building blocks designed for young inventors and STEM educators.Boson platform has more than 50 different modules, including sensors, actuators, logic gates and more.Boson modules are magnetic. They can stick on a whiteboard, fridge, or other magnetic objects In a snap.Each boson module comes with mounting plates that compatible with Lego blocks and screws.](https://www.dfrobot.com/boson.html)

模块资料地址：https://wiki.dfrobot.com/Boson_Kit_Product_List 

## Basic usage

* 1.读取旋转编码器的值，并通过串口将值打印出来。

```blocks

basic.forever(function () {
    serial.writeValue("rotation:", BosonKit.bosonAnalogRead(AnalogPin.P0, BosonSensorAnalogRead.BosonRotation))
})

```
* 2.读取光线传感器的值，并每隔一秒通过串口将值打印出来。

```blocks

basic.forever(function () {
    serial.writeValue("light_intensity:", BosonKit.bosonAnalogRead(AnalogPin.P0, BosonSensorAnalogRead.BosonLightIntensity))
    basic.pause(1000)
})

```
* 3.读取水分传感器的值，并每隔一秒通过串口将值打印出来。

```blocks

   basic.forever(function () {
    serial.writeValue("steam:", BosonKit.bosonAnalogRead(AnalogPin.P0, BosonSensorAnalogRead.BosonSteam))
    basic.pause(1000)
})

```
* 4.读取火焰传感器的值，并每隔一秒通过串口将值打印出来。

```blocks
basic.forever(function () {
    serial.writeValue("flame:", BosonKit.bosonAnalogRead(AnalogPin.P0, BosonSensorAnalogRead.BosonFlame))
    basic.pause(1000)
})

```
* 5.读取火焰传感器的值，并每隔一秒通过串口将值打印出来。

```blocks

  basic.forever(function () {
    serial.writeValue("sound:", BosonKit.bosonAnalogRead(AnalogPin.P0, BosonSensorAnalogRead.BosonSound))
    basic.pause(1000)
})

```
* 6.同时读取多个模拟传感器的值，并每隔一秒通过串口将值打印出来。

```blocks

basic.forever(function () {
    serial.writeValue("grayscale:", BosonKit.bosonAnalogRead(AnalogPin.P0, BosonSensorAnalogRead.BosonGrayscale))
    serial.writeValue("temp:", BosonKit.bosonAnalogRead(AnalogPin.P1, BosonSensorAnalogRead.BosonTemperature))
    serial.writeValue("soil:", BosonKit.bosonAnalogRead(AnalogPin.P2, BosonSensorAnalogRead.BosonSoilMoisture))
    serial.writeValue("humidity:", BosonKit.bosonAnalogRead(AnalogPin.P3, BosonSensorAnalogRead.BosonHumidity))
    basic.pause(1000)
})

```
```
以上的方法同时也适用其他的模拟传感器。
```
* 7.读取按钮模块的值，并通过串口将值打印出来。

```blocks

 basic.forever(function () {
    serial.writeValue("button", BosonKit.bosonDigitalRead(DigitalPin.P0, BosonSensorDigitalRead.BosonPushButton))
})

```
* 8.向P1写入高电平，驱动P1脚上的风扇。
* 
```blocks

basic.forever(function () {
    BosonKit.bosonDigitalWrite(DigitalPin.P1, 1, BosonSensorDigitalWrite.BosonFan)
})

```

* 9.当P0引脚上的按键被按下，就点亮P1引脚上的彩色灯带，否则彩色灯带熄灭。

```blocks

basic.forever(function () {
    if (BosonKit.bosonDigitalRead(DigitalPin.P0, BosonSensorDigitalRead.BosonPushButton) == 1) {
        BosonKit.bosonDigitalWrite(DigitalPin.P1, 1, BosonSensorDigitalWrite.BosonBrightLightLed)
    } else {
        BosonKit.bosonDigitalWrite(DigitalPin.P1, 0, BosonSensorDigitalWrite.BosonBrightLightLed)
    }
})

```
* 10.向P0口的风扇模块写入一个值，驱动它转起来。

```blocks

basic.forever(function () {
    BosonKit.bosonAnalogWrite(AnalogPin.P0, 429, BosonSensorAnalogWrite.BosonFan)
})

```

* 11.旋转P0引脚上的旋钮模块，当它旋转到最大值时，P8引脚上的高亮模块最亮。

```blocks

basic.forever(function () {
    BosonKit.bosonAnalogWrite(AnalogPin.P8, Math.map(BosonKit.bosonAnalogRead(AnalogPin.P0, BosonSensorAnalogRead.BosonRotation), 0, 1023, 0, 1023), BosonSensorAnalogWrite.BosonBrightLightLed)
})

```

* 12.读取静态心率值，并通过串口将值打印出来。

```blocks

BosonKit.heartrate_init(DigitalPin.P0)
basic.forever(function () {
    serial.writeValue("heartrate:", BosonKit.heartrate_read())
})

```

* 13.初始化RGB灯带，并设置点亮7颗灯，点亮5秒后，熄灭所有的灯。

```blocks

BosonKit.M011_00184_init(DigitalPin.P0, 7)
BosonKit.M011_00184_showColor(0xff0000)
basic.pause(5000)
BosonKit.M011_00184_off()

```

* 14.初始化RGB灯带后，让第1，第2颗灯显示红色，第3,4颗灯显示绿色，第5,6,7颗灯显示蓝色。

```blocks

BosonKit.M011_00184_init(DigitalPin.P0, 7)
basic.forever(function () {
    BosonKit.M011_00184_setIndexColor(BosonKit.M011_00184_ledRange(1, 2), 0xff0000)
    BosonKit.M011_00184_setIndexColor(BosonKit.M011_00184_ledRange(3, 4), 0x00ff00)
    BosonKit.M011_00184_setIndexColor(BosonKit.M011_00184_ledRange(5, 7), 0x0000ff)
})

```

* 15.设置RGB灯的亮度为50.

```blocks

BosonKit.M011_00184_init(DigitalPin.P0, 7)
BosonKit.M011_00184_brightness(50)
basic.forever(function () {
    BosonKit.M011_00184_showColor(0xff0000)
})

```

* 17.首先初始化舵机的角度为0度，然后在让舵机的角度转动到90度的位置。

```blocks

BosonKit.setServoAngle(AnalogPin.P0, 0)
basic.forever(function () {
    BosonKit.setServoAngle(AnalogPin.P0, 90)
})

```

## License

MIT

Copyright (c) 2020, microbit/micropython Chinese community  

## Supported targets

* for PXT/microbit


```package
BosonKit=github:DFRobot/pxt-DFRobot_Boson_Kit
```


