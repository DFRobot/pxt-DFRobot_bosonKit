# Boson Kit

[DFRobot Boson Kit is a set of modularized electronic building blocks designed for young inventors and STEM educators.Boson platform has more than 50 different modules, including sensors, actuators, logic gates and more.Boson modules are magnetic. They can stick on a whiteboard, fridge, or other magnetic objects In a snap.Each boson module comes with mounting plates that compatible with Lego blocks and screws.](https://www.dfrobot.com/product-1742.html)


## Basic usage

* 1.Blinking LED

```blocks

    basic.forever(function () {
        BosonKit.bos0017_d_rotation(DigitalPin.P0, 1)
        basic.showIcon(IconNames.Happy)
        basic.pause(500)
        BosonKit.bos0017_d_rotation(DigitalPin.P0, 0)
        basic.showIcon(IconNames.Sad)
        basic.pause(500)
    })

```
* 2.Push Button Lamp 

```blocks

    basic.forever(function () {
        if (BosonKit.bos0003_rotation(DigitalPin.P1) == 1) {
            BosonKit.bos0017_d_rotation(DigitalPin.P8, 1)
        } else {
            BosonKit.bos0017_d_rotation(DigitalPin.P8, 0)
        }
    })

```
* 3.Smart Photosensitive Light

```blocks

    basic.forever(function () {
        BosonKit.bos0016_a_rotation(AnalogPin.P0, Math.map(input.lightLevel(), 0, 230, 1023, 0))
    })

```
* 4.Automatic Door

```blocks

    BosonKit.ser0045_rotation(AnalogPin.P8, 0)
    basic.forever(function () {
        if (BosonKit.bos0002_rotation(DigitalPin.P0) == 1) {
            BosonKit.ser0045_rotation(AnalogPin.P8, 90)
            basic.pause(5000)
            BosonKit.ser0045_rotation(AnalogPin.P8, 0)
        }
    })

```
* 5.Whisk

```blocks

    basic.forever(function () {
        if (BosonKit.bos0003_rotation(DigitalPin.P0) == 1) {
            BosonKit.bos0024_rotation(AnalogPin.P8, 1000)
        } else {
            BosonKit.bos0024_rotation(AnalogPin.P8, 0)
        }
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


