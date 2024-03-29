


enum BosonSensorAnalogRead {
    //% blockId="bosonAnalogReadRotation" block="rotation module (i1)"
    BosonRotation = 1,
    //% blockId="bosonAnalogReadLightIntensity" block="light intensity (i4)"
    BosonLightIntensity = 2,
    //% blockId="bosonAnalogReadSteam" block="steam sensor (i6)"
    BosonSteam = 3,
    //% blockId="bosonAnalogReadFlame" block="flame sensor (i7)"
    BosonFlame = 4,
    //% blockId="bosonAnalogReadSound" block="sound sensor (i9)"
    BosonSound = 5,
    //% blockId="bosonAnalogReadGrayscale" block="grayscale sensor (i10)"
    BosonGrayscale = 6,
    //% blockId="bosonAnalogReadTemperature" block="temperature (i11)"
    BosonTemperature = 7,
    //% blockId="bosonAnalogReadSoilMoisture" block="soil moisture(i16)"
    BosonSoilMoisture = 8,
    //% blockId="bosonAnalogReadHumidity" block="humidity sensor (i18)"
    BosonHumidity = 9,
    //% blockId="bosonAnalogReadWaterproofTemperature" block="waterproof temperature (i19)"
    BosonWaterproofTemperature = 10,
    //% blockId="bosonAnalogReadUltrasonicDistance" block="ultrasonic distance sensor (i22)"
    BosonUltrasonicDistance = 11,
    //% blockId="bosonAnalogReadSHT30Humidity" block="SHT30 humidity (i27)"
    BosonSHT30Humidity = 12,
    //% blockId="bosonAnalogReadPhV2" block="pH sensor V2 (i28)"
    BosonV2Ph = 13
}

enum BosonSensorAnalogWrite {
    //% blockId="bosonAnalogWriteBrightLightLed" block="bright light LED (o1)"
    BosonBrightLightLed = 1,
    //% blockId="bosonAnalogWriteLed" block="LED module (o2r o2g o2b)"
    BosonLed = 2,
    //% blockId="bosonAnalogWriteRgbStripLights" block="RGB LED strip lights(o4)"
    BosonRgbStripLights = 3,
    //% blockId="bosonAnalogWriteBuzzer" block="buzzer module(o5)"
    BosonBuzzer = 4,
    //% blockId="bosonAnalogWriteFan" block="fan module (o6)"
    BosonFan = 5,
    //% blockId="bosonAnalogWriteMotor" block="motor control module (o9)"
    BosonMotor = 6,
    //% blockId="bosonAnalogWriteServo" block="servo control module (o10)"
    BosonServo = 7
}


enum BosonSensorDigitalRead {
    //% blockId="bosonDigitalReadPushButton" block="push button (i2b i2r i2y)"
    BosonPushButton = 1,
    //% blockId="bosonDigitalReadSelfLockingSwitch" block="self locking switch (i3)"
    BosonSelfLockingSwitch = 2,
    //% blockId="bosonDigitalReadTilt" block="tilt sensor (i5)"
    BosonTilt = 3,
    //% blockId="bosonDigitalReadTouch" block="touch sensor (i8)"
    BosonTouch = 4,
    //% blockId="bosonDigitalReadConductivity" block="conductivity sensor (i12)"
    BosonConductivity = 5,
    //% blockId="bosonDigitalReadMotion" block="motion sensor (i13)"
    BosonMotion = 6
}

enum BosonSensorDigitalWrite {
    //% blockId="bosonDigitalWriteBrightLightLed" block="bright light LED (o1)"
    BosonBrightLightLed = 1,
    //% blockId="bosonDigitalWriteLed" block="LED module (o2r o2g o2b)"
    BosonLed = 2,
    //% blockId="bosonDigitalWriteRgbStripLights" block="RGB LED strip lights (o4)"
    BosonRgbStripLights = 3,
    //% blockId="bosonDigitalWriteBuzzer" block="buzzer module (o5)"
    BosonBuzzer = 4,
    //% blockId="bosonDigitalWriteFan" block="fan module (o6)"
    BosonFan = 5,
    //% blockId="bosonDigitalWriteVoiceRecorder" block="voice recorder (o7)"
    BosonVoiceRecorder = 6,
    //% blockId="bosonDigitalWriteServo" block="servo control module (o10)"
    BosonServo = 7,
}




//% block="bosonKit"
//% weight=100 color=#0fbc11 icon="\uf0b2"
//% groups="['Sensor', 'Actuator']"
namespace bosonKit {

    let beattime1 = 0;
    let beattime2 = 0;
    let beattime3 = 0;
    let averagetime = 0;

    let _brightness = 255;
    let rgb_pin = -1;
    let neopixel_buf: Buffer;
    let ledsum = -1;


    /**
     * Read value from BOSON analog sensor 
     * @param pin to pin ,eg: "pin"
     * @param type to type ,eg: "BosonSensorAnalogRead.BosonTemperature"
     */

    //% block="analog read pin %pin %type" 
    //% group="Sensor"
    //% weight=100
    export function bosonAnalogRead(pin: AnalogPin, type: BosonSensorAnalogRead): number {

        let value: number = 0;
        switch (type) {
            case BosonSensorAnalogRead.BosonTemperature: value = temperatureSensor(pin); break;
            case BosonSensorAnalogRead.BosonHumidity: value = humiditySensor(pin); break;
            case BosonSensorAnalogRead.BosonWaterproofTemperature: value = waterproofTemperatureSensor(pin); break;
            case BosonSensorAnalogRead.BosonUltrasonicDistance: value = ultrasonicDistanceSensor(pin); break;
            case BosonSensorAnalogRead.BosonSHT30Humidity: value = humiditySht30(pin); break;
            case BosonSensorAnalogRead.BosonV2Ph: value = V2pHSensor(pin); break;
            default: value = pins.analogReadPin(pin); break;
        }
        return value;
    }

    /**
     * Write analog value(0-1023) to BOSON analog sensor
     * @param pin to pin ,eg: "pin"
     * @param value to value, eg: "0~1023"
     * @param type to type ,eg: "BosonSensorAnalogWrite.BosonMotor"
     */

    //% block="analog write pin %pin to %value %type" 
    //% group="Sensor"
    //% value.min=0 value.max=1023
    //% weight=90
    export function bosonAnalogWrite(pin: AnalogPin, value: number, type: BosonSensorAnalogWrite): void {

        switch (type) {
            case BosonSensorAnalogWrite.BosonMotor: if (value > 1000) {value = 1000;} pins.analogWritePin(pin, value); break;
            default: pins.analogWritePin(pin, value); break;
        }
    
    }

    /**
     * Read value from BOSON digital sensor 
     * @param pin to pin ,eg: "pin"
     * @param type to type ,eg: "BosonSensorDigitalRead.BosonConductivity"
     */

    //% block="digital read pin %pin %type" 
    //% group="Sensor"
    //% weight=80
    export function bosonDigitalRead(pin: DigitalPin, type: BosonSensorDigitalRead): number {

        let value: number = 0;
        switch (type) {
            case BosonSensorDigitalRead.BosonConductivity: value = pins.digitalReadPin(pin); break;
            default: value = pins.digitalReadPin(pin); break;
        }
        return value;
    }

    /**
     * Write digital value(0/1) to BOSON digital sensor
     * @param pin to pin ,eg: "pin"
     * @param value to value, eg: "0~1"
     * @param type to type ,eg: "BosonSensorDigitalWrite.BosonBrightLightLed"
     */
    
    //% block="digital write pin %pin to %value %type"
    //% group="Sensor"
    //% value.min=0 value.max=1
    //% weight=70
    export function bosonDigitalWrite(pin: DigitalPin, value: number, type: BosonSensorDigitalWrite): void {
        switch (type) {
            case BosonSensorDigitalWrite.BosonBrightLightLed: pins.digitalWritePin(pin, value); break;
            default: pins.digitalWritePin(pin, value); break;
        }
    }

    /**
     * Initialize heart rate sensor
     * @param pin to pin ,eg: "pin"
     */

    //% block="init pin %pin heart rate sensor (i20)" 
    //% group="Sensor"
    //% weight=60
    //% advanced=true
    export function heartrate_init(pin: DigitalPin): void {

        pins.setEvents(pin, PinEventType.Touch);
        switch (pin) {
            case DigitalPin.P0: control.onEvent(EventBusSource.MICROBIT_ID_IO_P0, EventBusValue.MICROBIT_BUTTON_EVT_CLICK, pinCallback); break;
            case DigitalPin.P1: control.onEvent(EventBusSource.MICROBIT_ID_IO_P1, EventBusValue.MICROBIT_BUTTON_EVT_CLICK, pinCallback); break;
            case DigitalPin.P2: control.onEvent(EventBusSource.MICROBIT_ID_IO_P2, EventBusValue.MICROBIT_BUTTON_EVT_CLICK, pinCallback); break;
            case DigitalPin.P3: control.onEvent(EventBusSource.MICROBIT_ID_IO_P3, EventBusValue.MICROBIT_BUTTON_EVT_CLICK, pinCallback); break;
            case DigitalPin.P4: control.onEvent(EventBusSource.MICROBIT_ID_IO_P4, EventBusValue.MICROBIT_BUTTON_EVT_CLICK, pinCallback); break;
            case DigitalPin.P5: control.onEvent(EventBusSource.MICROBIT_ID_IO_P5, EventBusValue.MICROBIT_BUTTON_EVT_CLICK, pinCallback); break;
            case DigitalPin.P6: control.onEvent(EventBusSource.MICROBIT_ID_IO_P6, EventBusValue.MICROBIT_BUTTON_EVT_CLICK, pinCallback); break;
            case DigitalPin.P7: control.onEvent(EventBusSource.MICROBIT_ID_IO_P7, EventBusValue.MICROBIT_BUTTON_EVT_CLICK, pinCallback); break;
            case DigitalPin.P8: control.onEvent(EventBusSource.MICROBIT_ID_IO_P8, EventBusValue.MICROBIT_BUTTON_EVT_CLICK, pinCallback); break;
            case DigitalPin.P9: control.onEvent(EventBusSource.MICROBIT_ID_IO_P9, EventBusValue.MICROBIT_BUTTON_EVT_CLICK, pinCallback); break;
            case DigitalPin.P10: control.onEvent(EventBusSource.MICROBIT_ID_IO_P10, EventBusValue.MICROBIT_BUTTON_EVT_CLICK, pinCallback); break;
            case DigitalPin.P11: control.onEvent(EventBusSource.MICROBIT_ID_IO_P11, EventBusValue.MICROBIT_BUTTON_EVT_CLICK, pinCallback); break;
            case DigitalPin.P12: control.onEvent(EventBusSource.MICROBIT_ID_IO_P12, EventBusValue.MICROBIT_BUTTON_EVT_CLICK, pinCallback); break;
            case DigitalPin.P13: control.onEvent(EventBusSource.MICROBIT_ID_IO_P13, EventBusValue.MICROBIT_BUTTON_EVT_CLICK, pinCallback); break;
            case DigitalPin.P14: control.onEvent(EventBusSource.MICROBIT_ID_IO_P14, EventBusValue.MICROBIT_BUTTON_EVT_CLICK, pinCallback); break;
            case DigitalPin.P15: control.onEvent(EventBusSource.MICROBIT_ID_IO_P15, EventBusValue.MICROBIT_BUTTON_EVT_CLICK, pinCallback); break;
            case DigitalPin.P16: control.onEvent(EventBusSource.MICROBIT_ID_IO_P16, EventBusValue.MICROBIT_BUTTON_EVT_CLICK, pinCallback); break;
            default: break;
        }
        beattime1 = 0;
        beattime2 = 0;
    }

    /**
     * Get heart rate(bpm)
     */

    //% block="read heart rate (bpm) (i20)" 
    //% group="Sensor"
    //% weight=50
    //% advanced=true
    export function heartrate_read(): number {
        if (averagetime == 0) {
            return 0;
        }
        let value: number = Math.round(29000 / averagetime);
        return value;
    }

    /**
     * Initialize a given number of LEDs on the RGB LED strip at a specific pin
     * @param pin to pin ,eg: "pin"
     * @param num to num ,eg: "1~7"
     */

    //% block="initialize RGB strip at pin %pin with %num leds"
    //% group="Actuator"
    //% num.min=1 num.max=7 num.defl=3
    //% weight=100
    export function M011_00184_init(pin: DigitalPin, num: number): void {
        rgb_pin = pin;
        neopixel_buf = pins.createBuffer(3 * num);
        for (let i = 0; i < 3 * num; i++) {
            neopixel_buf[i] = 0;
        }
        ledsum = num;
    }

    /**
     * Set the brightness of RGB lights
     * @param brightness to brightness ,eg: "0~255"
     */

    //% block="set brightness %brightness"
    //% group="Actuator"
    //% brightness.min=0 brightness.max=255 brightness.defl=255
    //% weight=90
    //% advanced=true
    export function M011_00184_brightness(brightness: number): void {

        _brightness = brightness;
    }

    /**
     * The LED positions where you wish to begin and end
     * @param from to start ,eg: "1~7"
     * @param to to end ,eg: "1~7"
     */

    //% block="leds from %from to %to"
    //% group="Actuator"
    //% from.min=1 from.max=7 from.defl=1
    //% to.min=1 to.max=7 to.defl=2
    //% weight=80
    export function M011_00184_ledRange(from: number, to: number): number {
        return ((from - 1) << 16) + (2 << 8) + (to);
    }

    /**
     * The designated LED shows a given color
     * @param index to index ,eg: "1~7"
     * @param color to color ,eg: "color"
     */

    //% block="led %index show color %color"
    //% group="Actuator"
    //% index.min=1 index.max=7 index.defl=1
    //% color.shadow="colorNumberPicker"
    //% weight=70
    export function M011_00184_setIndexColor(index: number, color: number): void {
        let f = index - 1;
        let t = index - 1;
        let r = (color >> 16) * (_brightness / 255);
        let g = ((color >> 8) & 0xFF) * (_brightness / 255);
        let b = ((color) & 0xFF) * (_brightness / 255);

        if ((index - 1) > 15) {
            if ((((index - 1) >> 8) & 0xFF) == 0x02) {
                f = (index - 1) >> 16;
                t = (index - 1) & 0xff;
            } else {
                f = 0;
                t = -1;
            }
        }
        for (let i = f; i <= t; i++) {
            neopixel_buf[i * 3 + 0] = Math.round(g)
            neopixel_buf[i * 3 + 1] = Math.round(r)
            neopixel_buf[i * 3 + 2] = Math.round(b)
        }
        ws2812b.sendBuffer(neopixel_buf, rgb_pin);

    }

    /**
     * All LEDs show a given color
     * @param rgb to rgb ,eg: "rgb"
     */

    //% block="show color %rgb"
    //% group="Actuator"
    //% weight=60
    //% rgb.shadow="colorNumberPicker"
    export function M011_00184_showColor(rgb: number) {
        let r = (rgb >> 16) * (_brightness / 255);
        let g = ((rgb >> 8) & 0xFF) * (_brightness / 255);
        let b = ((rgb) & 0xFF) * (_brightness / 255);
        for (let i = 0; i < 3 * ledsum; i++) {
            if ((i % 3) == 0)
                neopixel_buf[i] = Math.round(g)
            if ((i % 3) == 1)
                neopixel_buf[i] = Math.round(r)
            if ((i % 3) == 2)
                neopixel_buf[i] = Math.round(b)
        }
        ws2812b.sendBuffer(neopixel_buf, rgb_pin)
    }

    /**
     * Shift LEDs forward and clear with zeros
     * @param offset to offset ,eg: "offset"
     */

    //% block="shift pixels by %offset"
    //% group="Actuator"
    //% weight=52
    export function M011_00184_shift(offset: number): void {
        let steps = ledsum
        if(offset > steps){
            for (let i = 0; i < 16 * steps; i++) {
                neopixel_buf[i] = 0;
            }
        }
        if (ledsum > 1 && offset != 0){
            if (offset > 0)
            {
                for (let i = steps - 1; i >= offset; i--)
                {
                    neopixel_buf[i*3] = neopixel_buf[(i - offset)*3]
                    neopixel_buf[i*3+1] = neopixel_buf[(i - offset)*3+1]
                    neopixel_buf[i*3+2] = neopixel_buf[(i - offset)*3+2]
                }
                for (let i = 0; i < offset; i++)
                {
                    neopixel_buf[i*3] = 0
                    neopixel_buf[i*3+1] = 0
                    neopixel_buf[i*3+2] = 0
                }
            }
            else
            {
                for (let i = 0; i <= steps - Math.abs(offset); i++)
                {
                    neopixel_buf[i*3] = neopixel_buf[(i + Math.abs(offset))*3]
                    neopixel_buf[i*3+1] = neopixel_buf[(i + Math.abs(offset))*3+1]
                    neopixel_buf[i*3+2] = neopixel_buf[(i + Math.abs(offset))*3+2]
                }
                for (let i = steps - Math.abs(offset); i < steps; i++)
                {
                    neopixel_buf[i*3] = 0
                    neopixel_buf[i*3+1] = 0
                    neopixel_buf[i*3+2] = 0
                }
            }
            ws2812b.sendBuffer(neopixel_buf, rgb_pin)
        }
    }

    /**
     * Rotate LEDs forward
     * @param offset to offset ,eg: "offset"
     */

    //% block="rotate pixels by %offset"
    //% group="Actuator"
    //% weight=51
    //% advanced=true
    export function M011_00184_rotate(offset: number): void {
        let steps = ledsum
        if(offset > 0){
            offset = offset % steps;
        }else{
            offset = Math.abs(offset) % steps;
            offset = -offset;
        }
        if (ledsum > 1 && offset != 0){
            if (offset > 0){
                let offdata = pins.createBuffer(3 * offset);
                for (let i = 0; i < offset; i++){
                    offdata[i*3] = neopixel_buf[(steps - offset + i)*3]
                    offdata[i*3+1] = neopixel_buf[(steps - offset + i)*3+1]
                    offdata[i*3+2] = neopixel_buf[(steps - offset + i)*3+2]
                }
                for (let i = steps - 1; i >= offset; i--)
                {
                    neopixel_buf[i*3] = neopixel_buf[(i - offset)*3]
                    neopixel_buf[i*3+1] = neopixel_buf[(i - offset)*3+1]
                    neopixel_buf[i*3+2] = neopixel_buf[(i - offset)*3+2]
                }
                for (let i = 0; i < offset; i++)
                {
                    neopixel_buf[i*3] = offdata[i*3]
                    neopixel_buf[i*3+1] = offdata[i*3+1]
                    neopixel_buf[i*3+2] = offdata[i*3+2]
                }
                ws2812b.sendBuffer(neopixel_buf, rgb_pin)
            }
            else{
                let offdata = pins.createBuffer(3 * Math.abs(offset));
                for (let i = 0; i < Math.abs(offset); i++){
                    offdata[i*3] = neopixel_buf[i*3]
                    offdata[i*3+1] = neopixel_buf[i*3+1]
                    offdata[i*3+2] = neopixel_buf[i*3+2]
                }
                for (let i = 0; i <= steps - Math.abs(offset); i++)
                {

                    neopixel_buf[i*3] = neopixel_buf[(i + Math.abs(offset))*3]
                    neopixel_buf[i*3+1] = neopixel_buf[(i + Math.abs(offset))*3+1]
                    neopixel_buf[i*3+2] = neopixel_buf[(i + Math.abs(offset))*3+2]
                }
                for (let i = steps - Math.abs(offset); i < steps; i++)
                {
                    neopixel_buf[i*3] = offdata[(i - steps + Math.abs(offset))*3]
                    neopixel_buf[i*3+1] = offdata[(i - steps + Math.abs(offset))*3+1]
                    neopixel_buf[i*3+2] = offdata[(i - steps + Math.abs(offset))*3+2]
                }
                ws2812b.sendBuffer(neopixel_buf, rgb_pin)
            }
        }
    }

    /**
     * Turn off all LEDs
     */

    //% block="clear all"
    //% group="Actuator"
    //% weight=50
    export function M011_00184_off(): void {

        M011_00184_showColor(0);
    }

    /**
     * Convert red, green and blue channels into a RGB color
     * @param red to red ,eg: "0~255"
     * @param green to green ,eg: "0~255"
     * @param blue to blue ,eg: "0~255"
     */

    //% block="red %red green %green blue %blue"
    //% group="Actuator"
    //% red.min=0 red.max=255 red.defl=0
    //% green.min=0 green.max=255 green.defl=0
    //% blue.min=0 blue.max=255 blue.defl=0
    //% weight=40
    //% advanced=true
    export function M011_00184_rgb(red: number, green: number, blue: number): number {

        return (red << 16) + (green << 8) + (blue);
    }

    /**
     * LED strip shows gradient color
     * @param start to start ,eg: "1~7"
     * @param end to end ,eg: "1~7"
     * @param startHue to startHue ,eg: "0~360"
     * @param endHue to endHue ,eg: "0~360"
     */

    //% weight=50
    //% group="Actuator"
    //% startHue.defl=1
    //% endHue.defl=360
    //% startHue.min=0 startHue.max=360
    //% endHue.min=0 endHue.max=360
    //% start.min=1 start.max=7 start.defl=1
    //% end.min=1 end.max=7 end.defl=5
    //% block="RGB LED %start to %end show gradient color from %startHue to %endHue"
    //% inlineInputMode=inline
    //% advanced=true
    export function  M011_00184_ledRainbow(start: number, end: number, startHue: number, endHue: number) {
   
        start = start - 1
        end = end - 1
        if ((end < start)) {
            let num = end;
            end = start;
            start = num;
        }

        start = Math.max(start, 0);
        start = Math.min(start, ledsum);
        end = Math.max(end, 0);
        end = Math.min(end, ledsum);
        let steps = end - start + 1;
        
        // startHue = startHue >> 0;
        // endHue = endHue >> 0;
        const saturation = 100;
        const luminance = 50;
        // let steps = ledsum + 1;
        // const direction = HueInterpolationDirection.Clockwise;

        //hue
        const h1 = startHue;
        const h2 = endHue;
        const hDistCW = ((h2 + 360) - h1) % 360;
        const hStepCW = Math.idiv((hDistCW * 100), steps);
        // const hDistCCW = ((h1 + 360) - h2) % 360;
        // const hStepCCW = Math.idiv(-(hDistCCW * 100), steps);
        let hStep: number = hStepCW;
        // if (direction === HueInterpolationDirection.Clockwise) {
        //     hStep = hStepCW;
        // } else if (direction === HueInterpolationDirection.CounterClockwise) {
        //     hStep = hStepCCW;
        // } else {
        //     hStep = hDistCW < hDistCCW ? hStepCW : hStepCCW;
        // }
        const h1_100 = h1 * 100; //we multiply by 100 so we keep more accurate results while doing interpolation

        //sat
        const s1 = saturation;
        const s2 = saturation;
        const sDist = s2 - s1;
        const sStep = Math.idiv(sDist, steps);
        const s1_100 = s1 * 100;

        //lum
        const l1 = luminance;
        const l2 = luminance;
        const lDist = l2 - l1;
        const lStep = Math.idiv(lDist, steps);
        const l1_100 = l1 * 100

        //interpolate
        if (steps === 1) {
            writeBuff(start, hsl(h1 + hStep, s1 + sStep, l1 + lStep))
        } else {
            writeBuff(start, hsl(startHue, saturation, luminance));
            for (let i = start + 1; i < start + steps - 1; i++) {
                const h = Math.idiv((h1_100 + i * hStep), 100) + 360;
                const s = Math.idiv((s1_100 + i * sStep), 100);
                const l = Math.idiv((l1_100 + i * lStep), 100);
                writeBuff(0 + i, hsl(h, s, l));
            }
            writeBuff(start + steps - 1, hsl(endHue, saturation, luminance));
        }
        ws2812b.sendBuffer(neopixel_buf, rgb_pin)
    }

    /**
     * Servo rotates to a specific angle
     * @param pin to pin ,eg: "pin"
     * @param angle to angle ,eg: "0~180"
     */

    //% block="9g servo module pin %pin angle %angle" 
    //% group="Actuator"
    //% angle.min=0 angle.max=180
    //% weight=36
    export function setServoAngle(pin: AnalogPin, angle: number): void {
        pins.servoWritePin(pin, angle)
    }

    function temperatureSensor(pin: AnalogPin): number {

        let value: number = pins.analogReadPin(pin);
        return Math.round((100 * value * (3.3 / 10.24)) * 3.3 / 10.24) / 100;
    }

    function humiditySensor(pin: AnalogPin): number {

        let value: number = pins.analogReadPin(pin);
        return Math.round(value / 10);
    }

    function waterproofTemperatureSensor(pin: AnalogPin): number {

        let value: number = pins.analogReadPin(pin);
        let n_Vref: number = 3.3;
        let n_Voltage_Value: number = ((value / 1024.0) * n_Vref);
        let n_Rt: number = ((n_Voltage_Value * 10.0) / (n_Vref - n_Voltage_Value));
        if (((0.593 > n_Rt) || (n_Rt > 331.498))) {
            return -1;
        }
        else {
            return Math.round(((1177692.5 / (3950 + (298.15 * (Math.log((n_Rt / 10.0)))))) - 270.35) * 100) / 100;
        }

    }

    function ultrasonicDistanceSensor(pin: AnalogPin): number {

        let value: number = Math.round(10 * pins.analogReadPin(pin) * (100 / 1023)) / 10;
        return value;
    }

    function humiditySht30(pin: AnalogPin): number {

        let value: number = pins.analogReadPin(pin);
        return Math.round(value / 10);
    }

    function V2pHSensor(pin: AnalogPin): number {

        let map: number = 1024;
        let aref: number = 3300;
        let _neutralVoltage: number = 1500.0;
        let _acidVoltage: number = 2032.44;
        let voltage: number = pins.analogReadPin(pin) / map * aref;
        let slope: number = (7.0 - 4.0) / ((_neutralVoltage - 1500.0) / 3.0 - (_acidVoltage - 1500.0) / 3.0);
        let intercept: number = 7.0 - slope * (_neutralVoltage - 1500.0) / 3.0;
        let _phValue: number = Math.round(slope * (voltage - 1500.0) / 3.0 + intercept);
        return _phValue;
    }

    function pinCallback(): void {
        beattime3 = input.runningTime();
        averagetime = ((beattime3 - beattime2) + (beattime2 - beattime1)) / 2;
        beattime2 = beattime3;
        beattime1 = beattime2;
    }

    export enum HueInterpolationDirection {
        Clockwise,
        CounterClockwise,
        Shortest
    }

    function writeBuff(index: number, rgb: number) {

        if (index < ledsum){
            let r = ((rgb >> 16) * (_brightness / 255));
            let g = (((rgb >> 8) & 0xFF) * (_brightness / 255));
            let b = (((rgb) & 0xFF) * (_brightness / 255));
            neopixel_buf[index * 3 + 0] = Math.round(g)
            neopixel_buf[index * 3 + 1] = Math.round(r)
            neopixel_buf[index * 3 + 2] = Math.round(b)
        }
    }

    function hsl(h: number, s: number, l: number): number {
        h = Math.round(h);
        s = Math.round(s);
        l = Math.round(l);

        h = h % 360;
        s = Math.clamp(0, 99, s);
        l = Math.clamp(0, 99, l);
        let c = Math.idiv((((100 - Math.abs(2 * l - 100)) * s) << 8), 10000); //chroma, [0,255]
        let h1 = Math.idiv(h, 60);//[0,6]
        let h2 = Math.idiv((h - h1 * 60) * 256, 60);//[0,255]
        let temp = Math.abs((((h1 % 2) << 8) + h2) - 256);
        let x = (c * (256 - (temp))) >> 8;//[0,255], second largest component of this color
        let r$: number;
        let g$: number;
        let b$: number;
        if (h1 == 0) {
            r$ = c; g$ = x; b$ = 0;
        } else if (h1 == 1) {
            r$ = x; g$ = c; b$ = 0;
        } else if (h1 == 2) {
            r$ = 0; g$ = c; b$ = x;
        } else if (h1 == 3) {
            r$ = 0; g$ = x; b$ = c;
        } else if (h1 == 4) {
            r$ = x; g$ = 0; b$ = c;
        } else if (h1 == 5) {
            r$ = c; g$ = 0; b$ = x;
        }
        let m = Math.idiv((Math.idiv((l * 2 << 8), 100) - c), 2);
        let r = r$ + m;
        let g = g$ + m;
        let b = b$ + m;

        return ((r & 0xFF) << 16) | ((g & 0xFF) << 8) | (b & 0xFF);
    }
}
